"use client";
import Popup from "./components/Popup";
import QuestionsList from "./components/QuestionsList";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import ContactProps from "./components/ContactForm";
import Question from "./components/Question";

export default function Home() {
  const [questions, setQuestions] = useState([]);

  const [user, userDetails] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  const [answers, setAnswers] = useState({});

  const [popupData, setPopupDate] = useState({
    isOpen: false,
    title: "",
    titleClassName: "",
    body: "",
  });

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch("http://localhost:8080/questions");
      const data = await response.json();
      console.log(data);
      setQuestions(data);
    };

    getQuestions();
  }, []);

  function onClickHandler(): void {
    if (Object.keys(answers).length === questions.length) {
      setPopupDate({
        isOpen: true,
        title: "Thank you for your time",
        titleClassName: "text-3xl",
        body: "We will contact you soon",
      });
    }
  }

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
            onSubmit={() => {}}
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
          {questions.map((item: any, _) => {
            return (
              <div key={item.id} className="mb-8">
                <Question
                  question={item.question}
                  onAnswerSelect={(index) => {
                    setAnswers((prevState) => {
                      return {
                        ...prevState,
                        [item.id]: {
                          id: item.id,
                          answer: index + 1,
                        },
                      };
                    });
                  }}
                />
              </div>
            );
          })}
          <div>
            <button
              className="bg-[#0066FF] text-white px-8 py-4 rounded-lg"
              onClick={onClickHandler}
            >
              Submit
            </button>
          </div>
        </Section>
      </main>
    </div>
  );
}

// Webapp - browser
// Backend server - API call -> db
