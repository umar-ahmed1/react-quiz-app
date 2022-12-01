import React from 'react'

export default function Question(props){
    //create an array with all the answers then shuffle it
    const allAnswers = [props.correct_answer,...props.incorrect_answers]
    for (var i = allAnswers.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = allAnswers[i];
        allAnswers[i] = allAnswers[j];
        allAnswers[j] = temp;
    }
    console.log(allAnswers)

    const answerButtonElements = allAnswers.map(answer => {
        return <div className="answer-box">{answer}</div>
    })


    return(
        <div className="trivia-question">
            <div className="trivia-question-title">{props.question}</div>
            <div className="answers-div">{answerButtonElements}</div>
        </div>

        

    )


}