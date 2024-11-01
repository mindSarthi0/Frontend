// page.tsx

import React from "react";
// import Header from "./components/Header";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="bg-white p-6 max-w-md mx-auto my-8 rounded-lg shadow-md">
      <h2 className="font-semibold text-lg">Terms and Conditions</h2>
      <p className="text-sm text-gray-700 mb-4 text-center">
        By accessing our website and using our services, you agree to the
        following terms and conditions. Please read them carefully.
      </p>

      <div className="space-y-4">
        <section>
          <h3 className="font-semibold text-sm">Service Description:</h3>
          <p className="text-sm text-gray-700">
            COGNIFY offers psychological assessments, which include personality
            analysis and psychological insights delivered digitally via email.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-sm">Eligibility:</h3>
          <p className="text-sm text-gray-700">
            You must be at least 18 years old to use our services.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-sm">Payment Terms:</h3>
          <p className="text-sm text-gray-700">
            Payments must be completed before receiving your report.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-sm">Data Usage:</h3>
          <p className="text-sm text-gray-700">
            By using our services, you agree to our Privacy Policy regarding
            data collection and usage.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-sm">Limitation of Liability:</h3>
          <p className="text-sm text-gray-700">
            We are not liable for any damages resulting from the use of our
            services. The assessments and interpretations are for informational
            purposes only and should not replace professional advice.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-sm">Changes to Terms:</h3>
          <p className="text-sm text-gray-700">
            We reserve the right to modify these terms at any time. Continued
            use of our services implies acceptance of any updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="">
      {/* Header with Background for "BIG 5 Personality Test" */}

      <header
        className="flex justify-center items-center relative text-center py-6 "
        style={{
          backgroundColor: "#3F72AF", // Light gray background
          padding: "24px", // Padding around the text
          // borderRadius: "8px", // Rounded corners
          // boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)", // Shadow for depth
          fontFamily: "Helvetica, Arial, sans-serif", // Set to Helvetica
          position: "relative", // Required for positioning logo
        }}
      >
        {/* Logo on the top left */}
        <img
          src="/logo_1.png" // Replace with the actual logo path
          alt="Logo"
          className="left-4 sm:w-24 sm:h-24 h-[40px] w-[40px] object-contain" // Adjust size and position
        />

        {/* Title in the center */}
        <h1
          className="text-xl sm:text-6xl font-medium text-white mx-auto"
          style={{
            fontWeight: "bold", // Set font to bold
            fontVariant: "small-caps", // Use small caps
          }}
        >
          BIG 5 Personality Assessment
        </h1>
      </header>

      {/* Progress Bar at the bottom of the screen */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Welcome to COGNIFY
      </h1>
      <TermsAndConditions />

      <Footer />
    </div>
  );
}
