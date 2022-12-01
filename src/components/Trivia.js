import React from 'react'
import Question from './Question'

export default function Trivia(props){
    console.log(props.data)

    const allElements = props.data.map(item => {
        //create a question element with all the relative data
        return <Question
                    key={item.index}
                    question={item.question}
                    correct_answer={item.correct_answer}
                    incorrect_answers={item.incorrect_answers}
                />
    })

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
