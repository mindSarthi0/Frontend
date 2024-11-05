// app/legal/page.tsx

'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const LegalPage = dynamic(() => Promise.resolve(() => {
  const termsRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);
  const refundRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const shippingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const sectionRef = {
        terms: termsRef,
        privacy: privacyRef,
        refund: refundRef,
        pricing: pricingRef,
        shipping: shippingRef,
        contact: contactRef,
        services: servicesRef,
      }[section];

      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

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
          <p className="mb-2 text-[#112D4E]">Welcome to Mind Sarthi</p>
          <p className="mb-4 text-[#112D4E]">
            By accessing our website and using our services, you agree to the following terms and conditions. Please read them carefully.
          </p>
          <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
            <li><strong>Service Description:</strong> Mind Sarthi offers psychological assessments, which include personality analysis and psychological insights delivered digitally via email.</li>
            <li><strong>Eligibility:</strong> You must be at least 12 years old to use our services.</li>
            <li><strong>Payment Terms:</strong> Payments must be completed before receiving your report.</li>
            <li><strong>Data Usage:</strong> By using our services, you agree to our Privacy Policy regarding data collection and usage.</li>
            <li><strong>Limitation of Liability:</strong> We are not liable for any damages resulting from the use of our services. The assessments and interpretations are for informational purposes only and should not replace professional advice.</li>
            <li><strong>Changes to Terms:</strong> We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of any updates.</li>
          </ul>
        </div>

        <div ref={privacyRef} id="privacy" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Privacy Policy</h2>
          <p className="text-[#112D4E]">Your privacy is important to us. We only collect and store data till refund period is over</p>
        </div>

        <div ref={refundRef} id="refund" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Refund Policy</h2>
          <p className="text-[#112D4E]">In case user is disatisfied with the report, a refund request can be intiatied under 48 hrs of report generation by mailing us on support@mindsarthi.com</p>
        </div>

        <div ref={pricingRef} id="pricing" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Pricing Information</h2>
          <p className="text-[#112D4E]">Details of our pricing structure for various assessments are available here.</p>
          <li>BIG5 Personality Assessment Report = 21 Rupees </li>
        </div>

        <div ref={shippingRef} id="shipping" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Shipping Policy</h2>
          <p className="text-[#112D4E]">All assessments are delivered digitally via email. No physical shipping is involved.</p>
        </div>

        <div ref={contactRef} id="contact" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Contact Us</h2>
          <p className="text-[#112D4E]">For any questions or concerns, please contact us at support@mindsarthi.com.</p>
        </div>

        <div ref={servicesRef} id="services" className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">Our Services</h2>
          <p className="text-[#112D4E]">Mind Sarthi offers a range of psychological assessments designed to provide insights into personality and mental well-being.</p>
        </div>
      </main>
    </div>
  );
}), { ssr: false }); // Disable SSR

export default LegalPage;
