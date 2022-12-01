import React from 'react'

export default function Home(props){
    return (
        <div className="home-screen">
          <div className="title">Trivia Game</div>
          <div className="description">
            Pick a category, complete a trivia, and get graded!</div>
          <button 
          className="start-button"
          onClick={ () => props.changeSection("select-section")}>Start</button>
          <div className="author">Developed by Umar Ahmed</div>
        </div>
    )

}

