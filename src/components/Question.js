import React from 'react'
import {nanoid} from 'nanoid'

export default function Question(props){
    //create an array with all the answers then shuffle it
    for (var i = props.all_answers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = props.all_answers[i];
        props.all_answers[i] = props.all_answers[j];
        props.all_answers[j] = temp;
    }

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