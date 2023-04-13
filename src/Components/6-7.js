import React, { useState } from 'react';
import '../App.css';

const questions = [
    {
        id: 1,
        question: 'What is the capital of Ukraine?',
        options: ['Lviv', 'Odessa', 'Kyiv', 'Kharkiv', 'Dnipro'],
        answer: 'Kyiv'
    },
    {
        id: 2,
        question: 'What year did World War II begin?',
        options: ['1939', '1940', '1941', '1942', '1943'],
        answer: '1939'
    },
    {
        id: 3,
        question: 'What is the largest planet in the Solar System?',
        options: ['Mars', 'Jupiter', 'Venus', 'Mercury', 'Saturn'],
        answer: 'Jupiter'
    }
]

const Task_6_7 = () => {
    const [selected, setSelected] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionClick = (option) => {
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        setSelected(option);
        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowScore(true);
            }
            setSelected(null);
        }, 1000);
    }

    return (
        <div className="Tasks">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option) => (
                            <button className={`btn ${selected === option && 'selected'}`} onClick={() => handleOptionClick(option)} key={option}>{option}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Task_6_7;