import React from 'react'
import quizLogo from '../assets/quiz-logo.png'
export const Headers = () => {
    return (
        <header>
            <img src={quizLogo} alt='Logo'/>
            <h1>React Quiz</h1>
        </header>
    )
}
