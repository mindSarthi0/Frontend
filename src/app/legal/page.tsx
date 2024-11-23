// app/legal/page.tsx

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LegalPage = dynamic(() =>
  Promise.resolve(() => {
    const termsRef = useRef<HTMLDivElement>(null);
    const privacyRef = useRef<HTMLDivElement>(null);
    const refundRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const shippingRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    const searchParams = useSearchParams();

    useEffect(() => {
      const section = searchParams.get("section");
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
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [searchParams]);

    return (
      <div className="min-h-screen bg-[#F9F7F7]">
        <Header title="BIG 5 Personality Assessment" />

        <main className="container mx-auto px-4 py-[72px]">
          <div className="mb-12 bg-white p-6 rounded-lg shadow-md flex items-center">
            <h2 className="text-4xl font-semibold text-[#112D4E]">Legal</h2>
          </div>
          <div
            ref={termsRef}
            id="terms"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Terms and Conditions
            </h2>
            <p className="mb-2 text-[#112D4E]">Welcome to Mind Sarthi</p>
            <p className="mb-4 text-[#112D4E]">
              By accessing and using our website and services, you agree to the
              terms and conditions outlined below. Please read them carefully
              before proceeding.
            </p>
            <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
              <li>
                <strong>Service Description:</strong> Mind Sarthi provides
                psychological assessment services, including personality
                analysis and psychological insights delivered digitally via
                email. These assessments are designed for self-reflection and
                informational purposes and should not be used as a substitute
                for professional mental health advice or therapy.
              </li>
              <li>
                <strong>Eligibility:</strong> Our services are intended for
                individuals who are at least 12 years of age. By using our
                services, you confirm that you meet this age requirement. If you
                are under the age of 18, you may use our services only with the
                involvement of a parent or guardian.
              </li>
              <li>
                <strong>Payment Terms:</strong> All payments must be made in
                full before receiving any report. Mind Sarthi accepts various
                payment methods, which will be presented at checkout. All prices
                are listed in Indian Rupees and are subject to change without
                prior notice.
              </li>
              <li>
                <strong>Data Usage:</strong> By using our services, you agree to
                our Privacy Policy regarding the collection, storage, and usage
                of your data. We use data solely to generate assessments and
                provide insights, and we do not share or sell your data to third
                parties.
              </li>
              <li>
                <strong>Limitation of Liability:</strong> Mind Sarthi will not
                be liable for any damages or losses resulting from the use or
                inability to use our services, including but not limited to
                direct, indirect, incidental, punitive, and consequential
                damages. Our assessments are for informational purposes only and
                do not constitute professional or clinical advice. For any
                medical or psychological concerns, we recommend consulting a
                licensed mental health professional.
              </li>
              <li>
                <strong>Changes to Terms:</strong> We reserve the right to
                update or modify these terms at any time. Continued use of our
                services after changes have been made constitutes acceptance of
                the revised terms.
              </li>
            </ul>
          </div>

          <div
            ref={privacyRef}
            id="privacy"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Privacy Policy
            </h2>
            <p className="text-[#112D4E]">
              Your privacy is important to us at Mind Sarthi. We are committed
              to protecting your personal information and ensuring transparency
              about our data practices.
            </p>
            <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
              <li>
                <strong>Data Collection:</strong> Mind Sarthi collects only the
                necessary information to generate accurate assessments and
                insights, which may include your responses to our assessment
                questions and demographic information (if relevant).
              </li>
              <li>
                <strong>Data Storage and Retention:</strong> We store your data
                securely and retain it only until the refund period (48 hours)
                has passed. After this period, all identifiable data is
                permanently deleted from our systems.
              </li>
              <li>
                <strong>Data Protection:</strong> We implement security measures
                to protect your information from unauthorized access,
                alteration, or disclosure. However, no data transmission over
                the internet is 100% secure, and we cannot guarantee absolute
                security.
              </li>
              <li>
                <strong>Data Usage:</strong> The data you provide is used solely
                to generate your personalized psychological assessment and
                insights. Mind Sarthi does not sell or share your information
                with any third parties.
              </li>
            </ul>
          </div>

          <div
            ref={refundRef}
            id="refund"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Refund Policy
            </h2>
            <p className="text-[#112D4E]">
              At Mind Sarthi, we strive to ensure that our users have a positive
              experience with our services. If you are dissatisfied with the
              report, please note our refund policy:
            </p>
            <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
              <li>
                <strong>Refund Eligibility:</strong> Refund requests can be
                initiated within 48 hours of receiving your report by contacting
                us at{" "}
                <a
                  href="mailto:support@mindsarthi.com"
                  className="text-blue-600"
                >
                  support@mindsarthi.com
                </a>
                . Please include details about the issues you encountered with
                the report for a quicker resolution.
              </li>
              <li>
                <strong>Processing Refunds:</strong> Upon receiving a valid
                refund request, we will process your refund within 7 business
                days. Refunds are issued using the same payment method used for
                the original transaction.
              </li>
            </ul>
          </div>

          <div
            ref={pricingRef}
            id="pricing"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Pricing Information
            </h2>
            <p className="text-[#112D4E]">
              We believe in transparent and affordable pricing for our
              psychological assessments. Our current pricing structure is as
              follows:
            </p>
            <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
              <li>BIG5 Personality Assessment Report - ₹21</li>
            </ul>
            <p className="text-[#112D4E]">
              Mind Sarthi reserves the right to change prices at any time. Any
              pricing changes will not affect orders that have already been
              placed.
            </p>
          </div>

          <div
            ref={shippingRef}
            id="shipping"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Shipping Policy
            </h2>
            <p className="text-[#112D4E]">
              Since our services are entirely digital, there is no physical
              shipping involved. All assessment reports are delivered via email
              upon successful completion of payment. Please ensure your email
              address is correctly provided during the payment process.
            </p>
          </div>

          <div
            ref={contactRef}
            id="contact"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Contact Us
            </h2>
            <p className="text-[#112D4E]">
              If you have any questions, concerns, or feedback, please feel free
              to reach out to us:
            </p>
            <ul className="list-disc pl-5 mb-4 text-[#112D4E]">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@mindsarthi.com"
                  className="text-blue-600"
                >
                  support@mindsarthi.com
                </a>
              </li>
              <li>
                Office Address: 4th floor, 17, Satya Niketan, 110021, Delhi{" "}
              </li>
              <li>Office Hours: Monday to Friday, 9:00 AM – 6:00 PM IST</li>
            </ul>
          </div>

          <div
            ref={servicesRef}
            id="services"
            className="mb-12 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
              Services
            </h2>
            <p className="text-[#112D4E]">
              Mind Sarthi provides personalized psychological assessments,
              primarily focusing on personality traits and psychological
              insights. We currently offer the BIG5 Personality Assessment
              Report and plan to expand our offerings to include other
              assessment tools. All services are intended for informational and
              self-reflection purposes only.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  })
);

export default LegalPage;
