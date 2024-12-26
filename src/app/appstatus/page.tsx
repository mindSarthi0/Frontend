// page.tsx

import React from "react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <div>
        <h1>
          <strong>App Status</strong>
        </h1>
        <p>App Version: 0.1.2</p>
      </div>

      <Footer />
    </div>
  );
}
