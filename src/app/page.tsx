"use client";
import Popup from "./components/Popup";
import QuestionsList from "./components/QuestionsList";
import Section from "./components/Section";
import { useState } from "react";
import ContactProps from "./components/ContactForm";

export default function Home() {
  const [popupData, setPopupDate] = useState({
    isOpen: false,
    title: "",
    titleClassName: "",
    body: "",
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Popup
        isOpen={popupData.isOpen}
        onClose={() => setPopupDate({ ...popupData, isOpen: false })}
        wrapperClass="p-[8px]"
        ctaName={""}
      >
        <div>
          <ContactProps
            onSuccess={function (): void {
              throw new Error("Function not implemented.");
            }}
            onFailed={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </Popup>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Section withMaxWidth>
          <QuestionsList />
        </Section>
      </main>
    </div>
  );
}

// Webapp - browser
// Backend server - API call -> db
