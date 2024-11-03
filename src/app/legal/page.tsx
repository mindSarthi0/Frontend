'use client'

import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

export default function LegalPage() {
  const termsRef = useRef<HTMLDivElement>(null)
  const privacyRef = useRef<HTMLDivElement>(null)
  const refundRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const shippingRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const searchParams = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      const sectionRef = {
        'terms': termsRef,
        'privacy': privacyRef,
        'refund': refundRef,
        'pricing': pricingRef,
        'shipping': shippingRef,
        'contact': contactRef,
        'services': servicesRef
      }[section]

      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#F9F7F7]">
      <header className="bg-[#3F72AF] text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Legal Information</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div ref={termsRef} id="terms" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Terms and Conditions</h2>
          <p className="mb-2 text-[#112D4E]">Welcome to COGNIFY</p>
          <p className="mb-4 text-[#112D4E]">By accessing our website and using our services, you agree to the following terms and conditions. Please read them carefully.</p>
          <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
            <li><strong>Service Description:</strong> COGNIFY offers psychological assessments, which include personality analysis and psychological insights delivered digitally via email.</li>
            <li><strong>Eligibility:</strong> You must be at least 18 years old to use our services.</li>
            <li><strong>Payment Terms:</strong> Payments must be completed before receiving your report.</li>
            <li><strong>Data Usage:</strong> By using our services, you agree to our Privacy Policy regarding data collection and usage.</li>
            <li><strong>Limitation of Liability:</strong> We are not liable for any damages resulting from the use of our services. The assessments and interpretations are for informational purposes only and should not replace professional advice.</li>
            <li><strong>Changes to Terms:</strong> We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of any updates.</li>
          </ul>
        </div>

        <div ref={privacyRef} id="privacy" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Privacy Policy</h2>
          <p className="mb-4 text-[#112D4E]">At COGNIFY, we value your privacy. Here is how we handle your data:</p>
          <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
            <li><strong>Data Collection:</strong> We collect personal data such as your name, email address, and assessment responses. This information helps us generate personalized reports.</li>
            <li><strong>Data Usage:</strong> Your data is used solely to provide and improve our psychological assessment services. We do not share your information with third parties.</li>
            <li><strong>Security:</strong> We take reasonable steps to protect your data. However, data transmitted over the internet cannot be completely secure.</li>
            <li><strong>Data Retention:</strong> We retain your data for as long as necessary to provide our services. You may request data deletion at any time by contacting us.</li>
          </ul>
        </div>

        <div ref={refundRef} id="refund" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Refund and Cancellation Policy</h2>
          <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
            <li><strong>Eligibility for Refunds:</strong>  Our digital psychological assessment reports are crafted with care and personalization. However, if you are not satisfied with your report, you may request a refund within 3 days of delivery by contacting us at care@duinvites.com.</li>
            <li><strong>Cancellation Policy:</strong> You may cancel an order before the payment is processed. Once paid, cancellations are no longer possible.</li>
            <li><strong>Refund Processing:</strong> Approved refunds will be processed within 5-7 working days. The credited amount will be returned to your original payment method.</li>
          </ul>
          <p className="text-[#112D4E]">For any questions or assistance, please reach out to us at care@duinvites.com.</p>
        </div>

        <div ref={pricingRef} id="pricing" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Pricing</h2>
          <p className="text-[#112D4E]">All prices on our website are listed in Indian Rupees (INR). Pricing includes the cost of assessments and any applicable taxes.</p>
        </div>

        <div ref={shippingRef} id="shipping" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Delivery Policy</h2>
          <p className="text-[#112D4E]">As a digital service, no physical shipping is required. Psychological assessment reports will be delivered to your registered email address within 24 hours of payment confirmation.</p>
        </div>

        <div ref={contactRef} id="contact" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Contact Us</h2>
          <p className="text-[#112D4E]"><strong>Email:</strong> care@duinvites.com</p>
          <p className="text-[#112D4E]"><strong>Phone:</strong> +91 7004585502</p>
          <p className="text-[#112D4E]"><strong>Address:</strong>South Campus, University of Delhi</p>
        </div>

        <div ref={servicesRef} id="services" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">COGNIFY Services</h2>
          <p className="text-[#112D4E]">We offer psychological assessments, including the Big Five personality assessment, with results delivered digitally. These reports provide insights into personality traits, strengths, vulnerabilities, and other personal insights.</p>
        </div>
      </main>
    </div>
  )
}