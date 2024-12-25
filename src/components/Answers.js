import React, { useRef } from "react";

export const Answers = ({ answers, userAnswers, answerState, selectAnswer }) => {
  const shuffleAnswer = useRef();

  if (answerState === "") {
    shuffleAnswer.current = [...answers];
    shuffleAnswer.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffleAnswer.current.map((answer) => {
        let isSelected = userAnswers.selectedAnswer === answer;
        let cssClass = "";
        if (isSelected && answerState === "answered") {
          cssClass = "selected";
        }
        if (isSelected && (answerState === "correct" || answerState === "wrong")) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => selectAnswer(answer)} className={cssClass} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
