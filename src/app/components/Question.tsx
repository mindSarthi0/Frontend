// question.tsx

"use client";
import React, { useState } from "react";

interface QuestionProps {
  question: string;
  onAnswerSelect: (selectedIndex: number) => void;
  totalQuestions: number; // Total number of questions
  currentQuestion: number; // Current question number
}

const Question: React.FC<QuestionProps> = ({
  question,
  onAnswerSelect,
  // totalQuestions,
  // currentQuestion,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
    onAnswerSelect(index);
  };

  const colors = {
    agree: "#37a576", // Green for Agree
    disagree: "#8c649c", // Purple for Disagree
    neutral: "#acafb8", // Gray for Neutral
  };

  const getSizeClass = (index: number) => {
    switch (index) {
      case 0:
      case 4:
        return "w-12 h-12 sm:w-20 sm:h-20";
      case 1:
      case 3:
        return "w-10 h-10 sm:w-14 sm:h-14";
      case 2:
      default:
        return "w-8 h-8 sm:w-12 sm:h-12";
    }
  };

  const getColorStyle = (index: number) => {
    if (index === 0 || index === 1) {
      return {
        backgroundColor:
          selectedIndex === index ? colors.disagree : "transparent",
        borderColor: colors.disagree,
        color: selectedIndex === index ? "#FFFFFF" : colors.disagree,
        hover: colors.disagree,
      };
    } else if (index === 3 || index === 4) {
      return {
        backgroundColor: selectedIndex === index ? colors.agree : "transparent",
        borderColor: colors.agree,
        color: selectedIndex === index ? "#FFFFFF" : colors.agree,
        hover: colors.agree,
      };
    } else {
      return {
        backgroundColor:
          selectedIndex === index ? colors.neutral : "transparent",
        borderColor: colors.neutral,
        color: selectedIndex === index ? "#FFFFFF" : colors.neutral,
        hover: colors.neutral,
      };
    }
  };

  return (
    <div className=" relative pb-16">
      <div className="flex flex-col items-center">
        {/* Padding to avoid overlap with the footer */}
        <p
          className="text-center text-xl sm:text-4xl font-medium text-gray-500 mb-12 mt-12 tracking-wider"
          style={{ fontFamily: "lora" }}
        >
          {question} {/* Question Text  */}
        </p>

        <div className="flex items-center">
          {/* Disagree Text with Calibri Bold */}
          <h1
            className="hidden sm:block mr-6 sm:mr-12 text-md sm:text-3xl font-medium tracking-wider"
            style={{ color: colors.disagree, fontFamily: "lora" }}
          >
            Disagree
          </h1>
          <div className="flex items-center space-x-8 sm:space-x-16">
            {Array.from({ length: 5 }).map((_, index) => {
              const { backgroundColor, borderColor, color, hover } =
                getColorStyle(index);
              return (
                <>
                  <div className="relative">
                    <button
                      key={index}
                      onClick={() => handleButtonClick(index)}
                      className={`${getSizeClass(
                        index
                      )} rounded-full border-4 flex items-center justify-center`}
                      style={{
                        backgroundColor,
                        borderColor,
                        color,
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          hover;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          selectedIndex === index
                            ? backgroundColor
                            : "transparent";
                      }}
                    />

                    {index === 0 && (
                      <h1
                        className="sm:hidden block text-md sm:text-3xl font-medium tracking-wider absolute"
                        style={{ color: colors.disagree, fontFamily: "lora" }}
                      >
                        Disagree
                      </h1>
                    )}
                    {index === 4 && (
                      <h1
                        className="sm:hidden block text-lg sm:text-3xl font-medium tracking-wider absolute"
                        style={{ color: colors.agree, fontFamily: "lora" }}
                      >
                        Agree
                      </h1>
                    )}
                  </div>
                </>
              );
            })}
          </div>
          {/* Agree Text with Calibri Bold */}
          <h1
            className="hidden sm:block ml-6 sm:ml-12 text-lg sm:text-3xl font-medium tracking-wider"
            style={{ color: colors.agree, fontFamily: "lora" }}
          >
            Agree
          </h1>
        </div>
      </div>
      {/* <div className="sm:hidden flex justify-between"></div> */}
    </div>
  );
};

export default Question;
