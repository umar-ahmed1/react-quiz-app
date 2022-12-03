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
                    selected_answer={item.selected_answer}
                    chooseAnswer={chooseAnswer}
                />
    })

    //function to handle when an answer is chosen
    function chooseAnswer(key,answer){
        //we want to map over the data and change the answer to selected
        //but it has to be for the right question
        props.setData(prevData => prevData.map(data => {
            if(key === data.key){
                return ({ 
                    ...data,
                    selected_answer:answer
                  })
            } else{
                return(data)
            }
          }))
    }


    return(
        <div className="trivia-screen">
        {allElements}
            <div className="display-answers">
                <div className="how-many-correct">
                    {`You scored ${props.score}/5 correct answers`}
                </div>
                    <button className="check-answers-button"
                        onClick={props.checkAnswers}
                    >Check answers</button>
            </div>
        </div>
    )

}
