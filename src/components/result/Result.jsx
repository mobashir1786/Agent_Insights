import React from 'react';
import './result.css'

const Result = () => {
    const storedQuestions = localStorage.getItem('questions');
    const updatedQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
    let correctAnswer = updatedQuestions.filter((n) => n.correct === true);
    let wrongAnswer = updatedQuestions.filter((n) => n.correct !== true);
    console.log(updatedQuestions, correctAnswer, wrongAnswer);
    return (
        <div className='result'>
            <div className="resultLeft">
                <h1>Test Summary</h1>
                <div className="same numberOfQuestion">
                    <div>No. Of Question</div>
                    <div>{updatedQuestions.length}</div>
                </div>
                <div className="same currectAnswer">
                    <div>Correct</div>
                    <div>{correctAnswer.length}</div>
                </div>
                <div className="same wrongAnswer">
                    <div>Incorrect</div>
                    <div>{wrongAnswer.length}</div>
                </div>
                <h1>Total Score</h1>
                <div className="same totalScore">
                    <div>{`${correctAnswer.length}/${updatedQuestions.length}`}</div>
                    <div>{(correctAnswer.length / updatedQuestions.length) * 100 + "%"}</div>
                </div>
            </div>
            <div className="resultRight">
                <h1>Summery</h1>
                <div className='circle'>{(correctAnswer.length / updatedQuestions.length) * 100 + "%"}</div>
            </div>
        </div>
    )
}

export default Result
