from flask import Flask, request, jsonify
from pymongo import MongoClient
from fpdf import FPDF
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import vertexai
from vertexai.generative_models import GenerativeModel

app = Flask(__name__)

# Initialize MongoDB Client
mongo_client = MongoClient("your_mongodb_connection_string")
db = mongo_client["your_database_name"]

# GCP Configuration
PROJECT_ID = 'your-project-id'  # Update with your project ID
LOCATION = 'us-central1'  # Change as needed

# Initialize Vertex AI
vertexai.init(project=PROJECT_ID, location=LOCATION)

# Function to fetch data from MongoDB
def fetch_data_from_mongo(user_id):
    result = db.assessments.find_one({"user_id": user_id})
    return result

# Function to generate report text using Google Cloud LLM
def generate_report_text_with_vertex_ai(data):
    # Prepare your prompt
    prompt = f"""
    Use the following data to create a one-pager personalized report for each domain. 
    Include subtopics like Career, Relationships, Strengths, and Vulnerabilities:
    
    Domain: Neuroticism = {data['neuroticism']['level']}
    Subdomains: 
    - Anxiety: {data['neuroticism']['subdomains']['anxiety']}
    - Anger: {data['neuroticism']['subdomains']['anger']}
    - Depression: {data['neuroticism']['subdomains']['depression']}
    - Self-consciousness: {data['neuroticism']['subdomains']['self-consciousness']}
    - Immoderation: {data['neuroticism']['subdomains']['immoderation']}
    - Vulnerability: {data['neuroticism']['subdomains']['vulnerability']}
    
    Continue for the other domains...
    """

    # Create a GenerativeModel instance
    model = GenerativeModel("gemini-1.5-flash-002")

    # Generate content using the model
    response = model.generate_content(prompt)

    # Extract the generated text
    report_text = response.text
    return report_text

# Function to generate a PDF from the report text
def generate_pdf(report_text):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    
    # Split report text into lines and add to PDF
    for line in report_text.split('\n'):
        pdf.cell(200, 10, txt=line, ln=True)
    
    pdf_filename = "report.pdf"
    pdf.output(pdf_filename)
    return pdf_filename

# Function to send email with the PDF attachment
def send_email_with_pdf(pdf_filename, client_email):
    # Email configuration
    sender_email = "your_email@example.com"
    sender_password = "your_email_password"
    
    # Set up the email
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = client_email
    msg['Subject'] = "Your Psychological Assessment Report"
    
    body = "Please find attached your psychological assessment report."
    msg.attach(MIMEText(body, 'plain'))
    
    # Attach the PDF
    with open(pdf_filename, "rb") as attachment:
        msg.attach(MIMEText(attachment.read(), 'pdf'))
    
    # Send the email
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)

# Endpoint to process the form submission
@app.route('/process', methods=['POST'])
def process_form():
    form_data = request.json['form_data']
    result_data = fetch_data_from_mongo(form_data['user_id'])  # Fetch data from MongoDB

    # Generate report text using Google Cloud LLM
    report_text = generate_report_text_with_vertex_ai(result_data)

    # Generate the PDF from the report text
    pdf_filename = generate_pdf(report_text)

    # Send the PDF to the client via email
    send_email_with_pdf(pdf_filename, form_data['client_email'])
    
    return jsonify({"message": "Report generated and sent via email."})

if __name__ == '__main__':
    app.run(debug=True)
