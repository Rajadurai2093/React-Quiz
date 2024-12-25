import React, { useCallback, useState } from "react";
import { QUESTIONS } from "../questions.js";
import { Questions } from "./Questions.js";
import { Summary } from "./Summary.js";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const questionIndex = userAnswers.length;

  const isQuizComplete = questionIndex === QUESTIONS.length;
  // const isQuizComplete = true;
  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <div id="question">
        <Questions key={questionIndex} index={questionIndex} onSelectAnswer={handleSelectAnswer} onSkipAnswer={handleSkipAnswer} />
      </div>
    </div>
  );
};
