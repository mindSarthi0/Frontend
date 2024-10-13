"use client";

import Question from "./Question";

const QuestionsList: React.FC<object> = () => {
  // Fetch questions here

  return (
    <div>
      <Question
        question={"Title"}
        onAnswerSelect={() => {
          alert();
        }}
      />
    </div>
  );
};
export default QuestionsList;
