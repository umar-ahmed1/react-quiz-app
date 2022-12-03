import React from 'react'
import {nanoid} from 'nanoid'

export default function Question(props){

    function chooseStyle(answer){
        if(!props.revealAnswers){
            if(answer === props.selected_answer){
                return {backgroundColor:"D6DBF5",
                        border: "2px solid #4D5B9E"}
            } else{
                return {backgroundColor:"white"}
            }
        } 
        //if the answers are revealed we need to figure out if we chose right or not
        else{
            //if ur answer is correct then green
          if (answer === props.correct_answer){
                return {backgroundColor:"#94D7A2"}  
          }
          //if ur answer is incorrect then red
          else if (answer === props.selected_answer && props.correct_answer !== answer){
            return{backgroundColor:"#F8BCBC",
                fontWeight:"500",
                opacity:"0.6"}
          }
          //if ur answer is neither then white
          else{
            return{backgroundColor:"white"}
          }

        }
        
    }


    const answerButtonElements = props.all_answers.map(answer => {
        return <button 
                className="answer-box"
                onClick={ props.revealAnswers ? undefined : ()=> props.chooseAnswer(props.id,answer)}
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