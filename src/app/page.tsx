// page.tsx

"use client";
import Popup from "./components/Popup";
import Section from "./components/Section";
import { useEffect, useState, useRef } from "react";
import ContactProps from "./components/ContactForm";
import Question from "./components/Question";
import Footer from "./components/Footer";
import { Answers } from "./interface";
import { Header } from "./components/Header";
import Main from "./components/Main";
import ComponentLoader from "./components/ComponentLoader";
import Loader from "./components/Loader";
import PillButton from "./components/PillButton";
import { apiCaller } from "./network";

interface Question {
  id: number;
  question: string;
}

interface AnswersWithQuestionId {
  [key: number]: Answers;
}

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState<boolean>(true);
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
      try {
        const response = await apiCaller({
          method: "GET",
          path: "/questions",
        });
        setQuestions(response);
        setQuestionsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
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

  const isLoading = questionsLoading;

  return (
    <div className="">
      <Header title="BIG 5 Personality Assessment" />

      <Popup
        isOpen={popupUserForm.isOpen}
        onClose={() => setPopupUserForm({ ...popupUserForm, isOpen: false })}
        popupContainerClass="p-[16px] sm:max-w-[600px] max-w-[480px]"
      >
        <ContactProps
          answers={Object.values(answers)}
          onSuccess={(paymentLink) => {
            setPopupUserForm({ isOpen: false });
            setPopupDate({
              isOpen: true,
              title: "Please wait!",
              titleClassName: "text-3xl",
              body: "Redirecting to payment page...",
            });
          
            // Redirect instead of opening a new window
            window.location.href = paymentLink;
          }}
          onFailed={() => alert("Failed to submit: Check logs")}
        />
      </Popup>
      <Popup
        isOpen={popupData.isOpen}
        onClose={() => setPopupDate({ ...popupData, isOpen: false })}
        popupContainerClass="p-[16px] sm:max-w-[600px] max-w-[480px]"
      >
        <h1 className={popupData.titleClassName}>{popupData.title}</h1>
        <p>{popupData.body}</p>
      </Popup>
      <Main>
        {/* Progress Bar at the bottom of the screen */}
        <div className="w-full fixed top-[64px] left-0 bg-gray-200">
          <div
            className="h-2 bg-green-500 transition-all duration-300"
            style={{ width: `${progress}%` }} // Set width based on progress
          ></div>
        </div>
        <ComponentLoader
          isLoading={isLoading}
          LoaderComponent={
            <div className=" h-screen flex justify-center items-center">
              <Loader text="Loading Questions..." />
            </div>
          }
        >
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
                  key={item.id}
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
              <PillButton onClick={onClickHandler} className="px-8 py-4">
                <h1 className=" text-2xl">Next</h1>
              </PillButton>
            </div>
          </Section>
          <section className="mb-8"></section>
        </ComponentLoader>
      </Main>

      <Footer />
    </div>
  );
}
