import React from 'react'

export default function Trivia(props){
    console.log(props.data)
    return(
        <div className="trivia-screen">
            <div className="trivia-question">
                <div className="trivia-question-title">{props.data[0].question}</div>
            </div>
            <div className="trivia-question">
                <div className="trivia-question-title">{props.data[1].question}</div>
            </div>
            <div className="trivia-question">
                <div className="trivia-question-title">{props.data[2].question}</div>
            </div>
            <div className="trivia-question">
                <div className="trivia-question-title">{props.data[3].question}</div>
            </div>
            <div className="trivia-question">
                <div className="trivia-question-title">{props.data[4].question}</div>
            </div>
            

        
        </div>
    )

}