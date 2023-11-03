import React, { useState } from 'react';
import './test.css';
import question from '../../assets/question'

const Test = () => {
    let [i, setI] = useState(0)
    let option = question[i].options;

    const nextBtnHandler = (e) => {
        e.preventDefault();
        const selectedAnswer = document.querySelector(`input[name="${question[i].id}"]:checked`).value;
        console.log(selectedAnswer);
        if (selectedAnswer === question[i].answer) {
            question[i].correct = true;
        }
        question[i].solve = true;
        if (i === question.length - 1) {
            // console.log(question);
            localStorage.setItem('questions', JSON.stringify(question));
            window.location.href = 'http://localhost:3000/result'
        } else {
            setI(i + 1);
        }
    }
    return (
        <div className='test'>
            <form onSubmit={nextBtnHandler} className="testLeft">
                <div className="testQuestionNo">Question:{question[i].id + "/" + question.length}</div>
                <div><hr /></div>
                <div className="testquestion">
                    {`${question[i].id} : ${question[i].question}`}
                </div>
                <div className="questionOption">
                    {
                        option.map((n) => (
                            <div key={n}>
                                <input type="radio" name={question[i].id} value={n} required />
                                <label>{n}</label>
                                <br />
                            </div >
                        ))
                    }
                </div>
                <div className="testQuestionBtn">
                    <button className="previousBtn" onClick={() => { setI(i = i - 1) }} disabled={i < 1 ? true : false}>Previous Question</button>

                    <button className="previousBtn">{i === question.length - 1 ? <span>Finish Test</span> : <span>Next Question</span>}</button>
                </div>
            </form>



            <div className="testRight">
                <div className="statusColor">
                    <div className="color">
                        <div style={{ backgroundColor: "rgb(36, 190, 139)", width: "30px", height: "20px" }}></div>
                        <div>Unanswered</div>
                    </div>
                    <div className="color">
                        <div style={{ backgroundColor: "#FDB827", width: "30px", height: "20px" }}></div>
                        <div>Answered</div>
                    </div>
                </div>
                {
                    question.map((n) => (
                        <div className="questionStatus" style={n.solve ? { color: "#FDB827", backgroundColor: "#FFEABE", border: "2px solid #FDB827" } : null} key={n.id}>{n.id}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Test
