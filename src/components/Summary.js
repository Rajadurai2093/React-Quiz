import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import  {QUESTIONS}  from "../questions.js";

export const Summary = ({ userAnswers }) => {
    let skipped=0, correct =0, wrong = 0;
    let questions = QUESTIONS;
    userAnswers.forEach((answer, index) => {
        if(answer === null){
            skipped++;
        }else if(questions[index].answers[0] === answer){
            correct++
        }else{
            wrong++;
        }
    });
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>QUIZ COMPLETED!!!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{Math.round((skipped/questions.length)*100)}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{Math.round((correct/questions.length)*100)}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{Math.round((wrong/questions.length)*100)}%</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
            let answerClass = `user-answer ${answer === null ? 'skipped' : QUESTIONS[index].answers[0] === answer ? 'correct' : 'wrong'}`;
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="questions">{QUESTIONS[index].text}</p>
              <p className={answerClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
