import React, { useCallback, useState } from "react";
import { questions } from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import { QuestionTimer } from "./QuestionTimer.js";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const questionIndex = userAnswers.length;

  const isQuizComplete = questionIndex === questions.length;
  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },[]);  
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>QUIZ COMPLETED!!!</h2>
      </div>
    );
  }
  const shuffleAnswer = [...questions[questionIndex].answers];
  shuffleAnswer.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={questionIndex} timeout={15000} onTimeOut={handleSkipAnswer} />
        <h2>{questions[questionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
