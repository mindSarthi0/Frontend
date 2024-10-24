// page.tsx

"use client";
import Popup from "./components/Popup";
import Section from "./components/Section";
import { useEffect, useState, useRef } from "react";
import ContactProps from "./components/ContactForm";
import Question from "./components/Question";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Answers } from "./interface";

interface Question {
  id: number;
  question: string;
}

interface AnswersWithQuestionId {
  [key: number]: Answers;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AnswersWithQuestionId>({});
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

  // Create refs for each question
  const questionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch("http://localhost:8080/questions");
      const data = await response.json();
      setQuestions(data);
    };

    getQuestions();
  }, []);

  function handleAnswerSelect(selectedIndex: number, questionId: number) {
    // Check if this question has already been answered
    const alreadyAnswered = !!answers[questionId];

    // Update the answer
    setAnswers((prevState) => ({
      ...prevState,
      [questionId]: {
        id: questionId.toString(),
        answer: selectedIndex + 1 + "",
      },
    }));

    // Move to the next question only if it's not already answered
    if (!alreadyAnswered && currentQuestionIndex < questions.length - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);

      // Scroll to the next question and center it on the screen
      questionRefs.current[nextQuestionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center", // Center the question on the screen
      });
    }
  }

  function onClickHandler(): void {
    if (Object.keys(answers).length === questions.length) {
      setPopupUserForm({ isOpen: true });
    }
  }

  // Calculate progress based on the number of answered questions
  const answeredQuestionsCount = Object.keys(answers).length;
  const progress = (answeredQuestionsCount / questions.length) * 100;

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
          src="/logo.png" // Replace with the actual logo path
          alt="Logo"
          className="absolute top-1 left-4 w-24 h-24 object-contain" // Adjust size and position
        />

        {/* Title in the center */}
        <h1
          className="text-6xl font-medium text-white mx-auto"
          style={{
            fontWeight: "bold", // Set font to bold
            fontVariant: "small-caps", // Use small caps
          }}
        >
          BIG 5 Personality Assessment
        </h1>
      </header>

      <section
        className="bg-[#DBE2EF] text-center py-8"
        style={{
          backgroundColor: "#DBE2EF",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <h2
          className="text-4xl"
          style={{
            fontWeight: "regular", // Set font to bold
            fontVariant: "small-caps",
            color: "#112D4E", // Use small caps
          }}
        >
          Instrutions
        </h2>
        <p className="text-lg text-white mt-4"></p>
      </section>

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
            <div
              key={item.id}
              ref={(el) => {
                questionRefs.current[index] = el;
              }} // Assign ref to each question
              className={`mb-8 ${
                index !== currentQuestionIndex ? "blur-sm" : ""
              }`}
            >
              <Question
                question={item.question}
                onAnswerSelect={(selectedIndex) =>
                  handleAnswerSelect(selectedIndex, item.id)
                }
                totalQuestions={questions.length}
                currentQuestion={index + 1}
              />

              {/* Fine Line to separate questions */}
              {index !== questions.length - 1 && (
                <hr className="my-8 border-gray-300" /> // Add this line
              )}
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
