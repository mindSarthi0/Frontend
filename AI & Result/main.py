from flask import Flask, request, jsonify
from google.cloud import language_v1
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os

app = Flask(__name__)

# Initialize Google Natural Language API client
client = language_v1.LanguageServiceClient()

@app.route('/process', methods=['POST'])
def process_form():
    form_data = request.json['form_data']
    result_text = analyze_result(form_data)
    pdf_filename = generate_pdf(result_text)

    # Here you can implement email logic to send the PDF (e.g., using SendGrid)
    send_email_with_pdf(pdf_filename)
    
    return jsonify({"message": "Success! Report generated and sent via email."})

def analyze_result(form_data):
    document = language_v1.Document(content=form_data, type_=language_v1.Document.Type.PLAIN_TEXT)
    response = client.analyze_sentiment(document=document)
    sentiment = response.document_sentiment
    return f"Sentiment Score: {sentiment.score}, Sentiment Magnitude: {sentiment.magnitude}"

def generate_pdf(result_text):
    pdf_filename = 'report.pdf'
    c = canvas.Canvas(pdf_filename, pagesize=letter)
    c.drawString(100, 750, result_text)  # Customize as needed
    c.save()
    return pdf_filename

def send_email_with_pdf(pdf_filename):
    # Logic to send email (use SendGrid or Gmail API)
    pass

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
