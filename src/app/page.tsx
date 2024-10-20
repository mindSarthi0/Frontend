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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState({});
  const [popupData, setPopupDate] = useState({
    isOpen: false,
    title: "",
    titleClassName: "",
    body: "",
  });

  const [popupUserForm, setPopupUserForm] = useState({
    isOpen: false,
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch("http://localhost:8080/questions");
      const data = await response.json();
      setQuestions(data);
    };

    getQuestions();
  }, []);

  function handleAnswerSelect(selectedIndex: number, questionId: number) {
    setAnswers((prevState) => ({
      ...prevState,
      [questionId]: { id: questionId, answer: selectedIndex + 1 + "" },
    }));
    // Move to the next question after the current one is answered
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function onClickHandler(): void {
    if (Object.keys(answers).length === questions.length) {
      setPopupUserForm({ isOpen: true });
    }
  }

  // Calculate progress based on the current question number
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="">
      {/* Header with Background for "BIG 5 Personality Test" */}
      <h1
        className="text-center text-6xl font-medium text-gray-800 mt-6 mb-6 tracking-normal"
        style={{
          backgroundColor: "#f0f0f0", // Light gray background
          padding: "20px",            // Padding around the text
          borderRadius: "8px",         // Rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
          fontFamily : "Calibri, sans-serif",
        }}
      >
        BIG 5 Personality Test
      </h1>
      <Popup
        isOpen={popupUserForm.isOpen}
        onClose={() => setPopupUserForm({ ...popupUserForm, isOpen: false })}
        wrapperClass="p-[16px]"
      >
        <ContactProps
          answers={Object.values(answers)}
          onSuccess={() => {
            setPopupUserForm({ isOpen: false });
            setPopupDate({
              isOpen: true,
              title: "Congratulations!",
              titleClassName: "text-3xl",
              body: "Your report is sent for analysis and soon be delivered to your email.",
            });
          }}
          onFailed={() => alert("Failed to submit: Check logs")}
          backendApi={"http://localhost:8080"}
        />
      </Popup>
      <Popup
        isOpen={popupData.isOpen}
        onClose={() => setPopupDate({ ...popupData, isOpen: false })}
        wrapperClass="p-[16px]"
      >
        <h1>{popupData.title}</h1>
        <p>{popupData.body}</p>
      </Popup>
      <Header />
      <main className="flex flex-col justify-center">
        <Section withMaxWidth>
          {questions.map((item: Question, index: number) => (
            <div key={item.id} className={`mb-8 ${index !== currentQuestionIndex ? 'blur-sm' : ''}`}>
              <Question
                question={item.question}
                onAnswerSelect={(selectedIndex) => handleAnswerSelect(selectedIndex, item.id)}
                totalQuestions={questions.length}
                currentQuestion={index + 1}
              />
            </div>
          ))}
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

      {/* Progress Bar at the bottom of the screen */}
      <div className="w-full fixed bottom-0 left-0 bg-gray-200">
        <div
          className="h-2 bg-green-500 transition-all duration-300"
          style={{ width: `${progress}%` }} // Set width based on progress
        ></div>
      </div>

      <Footer />
    </div>
  );
}
