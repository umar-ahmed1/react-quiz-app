import React from 'react'
import {nanoid} from 'nanoid'

export default function Question(props){

    function chooseStyle(answer){
        if(answer === props.selected_answer){
            return {backgroundColor:"D6DBF6",
                    border: "2px solid #4D5B9E"}
        } else{
            return {backgroundColor:"white"}
        }
    }


    const answerButtonElements = props.all_answers.map(answer => {
        return <button 
                className="answer-box"
                onClick={ ()=> props.chooseAnswer(props.id,answer)}
                key={nanoid()}
                style={chooseStyle(answer)}
                >{answer}</button>
    })

    return(
        <div className="trivia-question">
            <div className="trivia-question-title">{props.question}</div>
            <div className="answers-div">{answerButtonElements}</div>
        </div>

        

    )


}