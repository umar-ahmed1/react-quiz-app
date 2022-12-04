import React from 'react'

export default function Home(props){
    return(
        <div className="home-screen">
          <div className="title">Trivia Game</div>
          <div className="description">
            Pick a category, complete a trivia, and get graded!</div>
          <button 
          className="start-button"
          onClick={ props.selectedCategory==='CHOOSE' ? undefined : () => 
          props.changeSection("trivia-section")}>
            Start</button>

            <div className="select-wrapper">
                <h2 className="select-label">Select a Category</h2>
                <select 
                className="category-selection"
                name="CATEGORY_SELECTION" 
                id="CATEGORY_SELECTION"
                value={props.selectedCategory}
                onChange={props.handleChange}>
                    <option value="CHOOSE">--CHOOSE--</option>
                    <option value="GENERAL_KNOWLEDGE">General Knowledge</option>
                    <option value="SCIENCE_NATURE">Science & Nature</option>
                    <option value="ANIMALS">Animals</option>
                </select>

            </div>

          <div className="author">Developed by Umar Ahmed</div>
        </div>
    )

}