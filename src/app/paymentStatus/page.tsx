"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentStatusPage() {
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

      <footer className="bg-[#3F72AF] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 COGNIFY. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>
                  <Link
                    href="/legal?section=privacy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/legal?section=terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
