"use client";
import Popup from "./components/Popup";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import ContactProps from "./components/ContactForm";
import Question from "./components/Question";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Question {
  id: number;
  question: string;
}

export default function Home() {
  const [questions, setQuestions] = useState([]);

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
    <div className="">
      <h1 className="text-center text-3xl font-bold mb-8">
        We are student of DU University. This website is under progress
        7004585502
      </h1>
      <Popup
        isOpen={popupData.isOpen}
        onClose={() => setPopupDate({ ...popupData, isOpen: false })}
        wrapperClass="p-[16px]"
      >
        <div>
          <ContactProps
            // onSubmit={() => {}}
            answers={Object.values(answers)}
            onSuccess={function (): void {
              throw new Error("Function not implemented.");
            }}
            onFailed={function (): void {
              throw new Error("Function not implemented.");
            }}
            backendApi={"http://localhost:8080"}
          />
        </div>
      </Popup>
      <Header />
      <main className="flex flex-col justify-center">
        <Section withMaxWidth>
          {questions.map((item: Question) => {
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
                          answer: index + 1 + "",
                        },
                      };
                    });
                  }}
                />
              </div>
            );
          })}
          <div className="flex justify-center">
            <button
              className="bg-[#0066FF] text-white px-8 py-4 rounded-lg"
              onClick={onClickHandler}
            >
              Submit
            </button>
          </div>
        </Section>
        <section className="mb-8"></section>
      </main>
      <Footer />
    </div>
  );
}

// Webapp - browser
// Backend server - API call -> db
