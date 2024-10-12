"use client";

import Question from "./Question";

const QuestionsList: React.FC<object> = () => {
  // Fetch questions here
  return (
    <div>
      <Question
        question={
          "You usually feel more persuaded by what resonates emotionally with you than by factual arguments."
        }
        onAnswerSelect={(index) => {
          alert(index);
        }}
      />
    </div>
  );
};
export default QuestionsList;
