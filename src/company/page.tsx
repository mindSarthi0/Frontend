"use client";

import { useState } from "react";
import Link from "next/link";

export default function CompanyPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email and message to your server
    console.log("Submitted:", { email, message });
    alert("Thank you for your message. We will get back to you soon!");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#F9F7F7]">
      <header className="bg-[#3F72AF] text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">COGNIFY</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
            About Us
          </h2>
          <h3 className="text-xl font-medium mb-2 text-[#112D4E]">
            About COGNIFY
          </h3>
          <p className="mb-4 text-[#112D4E]">
            COGNIFY is dedicated to making psychological insights accessible and
            affordable. We believe that understanding oneself is the first step
            toward a fulfilling life, and our digital psychological assessments
            are crafted to help you gain deeper insights into your personality.
            Our assessments, including the Big Five Personality Test, are
            designed to be easy, quick, and affordable, with a focus on clarity
            and personalized results.
          </p>
          <p className="mb-4 text-[#112D4E]">
            With a team passionate about psychology and technology, we are
            committed to creating an experience that bridges the gap between
            scientific insight and real-world application, empowering you to
            make informed decisions for growth in your personal and professional
            life. Discover yourself with COGNIFY.
          </p>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
            Contact
          </h2>
          <h3 className="text-xl font-medium mb-2 text-[#112D4E]">
            Get in Touch with Us
          </h3>
          <p className="mb-4 text-[#112D4E]">
            Have questions or need support? We are here to help!
          </p>
          <ul className="mb-4 text-[#112D4E]">
            <li>
              <strong>Email:</strong> support@cognify.com
            </li>
            <li>
              <strong>Phone:</strong> +91 1234567890
            </li>
            <li>
              <strong>Operating Address:</strong> 123 Tech Park, Bangalore,
              Karnataka, India - 560001
            </li>
          </ul>
          <p className="mb-4 text-[#112D4E]">
            For inquiries about our assessments, partnership opportunities, or
            general questions, please reach out to us via the contact methods
            above. We are excited to assist you on your journey to
            self-discovery.
          </p>
        </section>

        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-[#112D4E]">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#112D4E]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3F72AF] focus:border-[#3F72AF]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#112D4E]"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3F72AF] focus:border-[#3F72AF]"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3F72AF] hover:bg-[#2E5A8B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F72AF]"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-[#3F72AF] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 COGNIFY. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
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
