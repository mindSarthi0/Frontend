"use client";

import PaymentStatus from "./components/PaymentStatus";
import React, { Suspense } from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

export default function PaymentStatusPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F7] flex flex-col justify-between">
      <Header title="BIG 5 Personality Assessment" />
      <main className="container mx-auto px-4 py-8 text-center">
        <Suspense fallback={<div>Loading...</div>}>
          <PaymentStatus />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
