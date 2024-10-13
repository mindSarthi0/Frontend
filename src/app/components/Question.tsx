"use client";
import React, { useState } from "react";

interface QuestionProps {
  question: string; // The question to display
  onAnswerSelect: (selectedIndex: number) => void; // Callback to handle answer selection
}

const Question: React.FC<QuestionProps> = ({ question, onAnswerSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Track selected button

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index); // Update the state with the selected button index
    onAnswerSelect(index); // Call the callback with the selected index
  };

  return (
    <div className="flex flex-col items-center">
      {/* Question text */}
      <p className="text-center text-lg mb-4">{question}</p>

      <div>
        <h1>Agree</h1>
      </div>
      {/* Container for the 7 circular buttons */}
      <div className="flex space-x-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
              selectedIndex === index
                ? "border-purple-600" // Style when selected
                : "border-gray-400" // Default style
            }`}
          >
            {/* Optional content inside buttons (index can be shown if needed) */}
          </button>
        ))}
      </div>
      <div>
        <h1>Disagree</h1>
      </div>
    </div>
  );
};

export default Question;
