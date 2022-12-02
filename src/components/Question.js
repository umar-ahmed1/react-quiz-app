import React from 'react'
import {nanoid} from 'nanoid'

export default function Question(props){

    const answerButtonElements = props.all_answers.map(answer => {
        return <div 
                className="answer-box"
                onClick={ ()=> props.chooseAnswer(props.id,answer)}
                key={nanoid()}
                >{answer}</div>
    })

    return(
        <div className="trivia-question">
            <div className="trivia-question-title">{props.question}</div>
            <div className="answers-div">{answerButtonElements}</div>
        </div>

        

    )


}