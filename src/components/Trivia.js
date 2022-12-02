import React from 'react'
import Question from './Question'
import {nanoid} from 'nanoid'

export default function Trivia(props){
    console.log(props.data)

    const allElements = props.data.map(item => {
        item.key=nanoid()
        //create a question element with all the relative data
        return <Question
                    key={item.key}
                    id={item.key}
                    question={item.question}
                    correct_answer={item.correct_answer}
                    incorrect_answers={item.incorrect_answers}
                    all_answers={item.all_answers}
                    chooseAnswer={chooseAnswer}
                />
    })

    //function to handle when an answer is chosen
    function chooseAnswer(key,answer){
        console.log(`key:${key},answer:${answer}`)
        
    }


    return(
        <div className="trivia-screen">
            {allElements}
            <div className="display-answers">
                <div className="how-many-correct"></div>
                <button className="check-answers-button">Check answers</button>
            </div>
            
        </div>
    )

}
