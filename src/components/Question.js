import React from 'react'

export default function Question(props){
    console.log(props.correct_answer)
    return(
        <div className="trivia-question">
            <div className="trivia-question-title">{props.question}</div>
        </div>

    )


}