import React from "react"

export default function Faq(props) {

    return (
        <div className="faq-question-box">
            <h3 className = "question">Question : {props.question}</h3>
            <h5 className="answer">Answer : {props.answer}</h5>
        </div>
    )
}