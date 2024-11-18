"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentStatus() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status") || "pending";

  const message = searchParams.get("message") || "Payment is still processing";

  return (
    <div className="min-h-screen bg-[#F9F7F7] flex flex-col justify-between">
      <main className="container mx-auto px-4 py-8 text-center">
        <h5 className="text-2xl font-semibold mb-4">
          Payment Status: {status}
        </h5>
        <p className="text-lg mb-6">{message}</p>
      </main>
    </div>
  );
}
