import { useState, useEffect } from "react";
import { Question } from "./components/interface";

interface ShuffledQuestionsProps {
  questions: Question[];
  render: (questions: Question[]) => React.ReactNode;
}

function shuffleArray(array: unknown[]) {
  // Implement Fisher–Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function ShuffledQuestions({
  questions,
  render,
}: ShuffledQuestionsProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Shuffle the questions when the component mounts
    const shuffled = shuffleArray([...questions]); // Create a copy of the array before shuffling
    setShuffledQuestions(shuffled as Question[]);
  }, [questions]);

  return <>{render(shuffledQuestions)}</>;
}
