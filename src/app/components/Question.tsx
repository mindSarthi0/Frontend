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
  totalQuestions,
  currentQuestion,
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
        return "w-20 h-20";
      case 1:
      case 3:
        return "w-14 h-14";
      case 2:
      default:
        return "w-12 h-12";
    }
  };

  const getColorStyle = (index: number) => {
    if (index === 0 || index === 1) {
      return {
        backgroundColor: selectedIndex === index ? colors.disagree : "transparent",
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
        backgroundColor: selectedIndex === index ? colors.neutral : "transparent",
        borderColor: colors.neutral,
        color: selectedIndex === index ? "#FFFFFF" : colors.neutral,
        hover: colors.neutral,
      };
    }
  };

  return (
    <div className="flex flex-col items-center relative pb-16">
      {/* Padding to avoid overlap with the footer */}
      <p className="text-center text-4xl font-medium text-gray-500 mb-12 mt-12 tracking-wider"
      style={{fontFamily: "lora" }}>


        {question} {/* Question Text  */}


      </p>

      <div className="flex items-center">
        {/* Disagree Text with Calibri Bold */}
        <h1
          className="mr-12 text-3xl font-medium tracking-wider"
          style={{ color: colors.disagree, fontFamily: "lora" }}
        >
          Disagree
        </h1>
        <div className="flex items-center space-x-16">
          {Array.from({ length: 5 }).map((_, index) => {
            const { backgroundColor, borderColor, color, hover } = getColorStyle(index);
            return (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`${getSizeClass(index)} rounded-full border-4 flex items-center justify-center`}
                style={{
                  backgroundColor,
                  borderColor,
                  color,
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = hover;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    selectedIndex === index ? backgroundColor : "transparent";
                }}
              />
            );
          })}
        </div>
        {/* Agree Text with Calibri Bold */}
        <h1
          className="ml-12 text-3xl font-medium tracking-wider"
          style={{ color: colors.agree, fontFamily:"lora" }}
        >
          Agree
        </h1>
      </div>
    </div>
  );
};

export default Question;
