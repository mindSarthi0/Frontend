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
          <div>
            <h1>Big 5 Personality Assessment</h1>
            <p>
              The Big Five Personality Traits are a widely used model in
              psychology and personality research. They consist of five
              dimensions: Openness to Experience, Conscientiousness,
              Extraversion, Agreeableness, and Neuroticism.
            </p>
          </div>
          <div>
            <h2>You are a leader personality type</h2>
            <p>
              You are a leader personality type. You are a natural leader and
              have a strong sense of responsibility. You are a good listener and
              have a strong sense of justice. You are a good leader and have a
              strong sense of responsibility.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  })
);

export default LegalPage;
