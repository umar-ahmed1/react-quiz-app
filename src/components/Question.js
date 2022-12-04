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

    //Problem where we had a string like &#39;Test&#39; for ex so it wouldn't
    //display the actual symbol so these lines of code fix that
    //credit: https://stackoverflow.com/questions/47962519/html-special-character-symbol-not-rendering-in-react-component
    function decodeString(strToDecode){
        const parser = new DOMParser();
        const decodedString = parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;
        return decodedString
    }


    const answerButtonElements = props.all_answers.map(answer => {
        return <button 
                className="answer-box"
                onClick={ props.revealAnswers ? undefined : ()=> props.chooseAnswer(props.id,answer)}
                key={nanoid()}
                style={chooseStyle(answer)}
                
                >{decodeString(answer)}</button>
    })

    const getDecodedString = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
   
    return(

        <div className="trivia-question">
            <div className="trivia-question-title">{decodeString(props.question)}</div>
            <div className="answers-div">{answerButtonElements}</div>
        </div>

        

    )


}