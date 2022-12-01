import React from 'react'
import Trivia from './components/Trivia'
import triviaData from './Data'

export default function App() {
  let data;
  //default render the home section
  const [section,setSection] = React.useState("home-section")

  //function that changes the section rendered to a different section
  function changeSection(newSection,selectedCategory){
    setSection(newSection)
    data = selectedCategory
  }

  const [selectedCategory,setSelectedCategory] = React.useState('GENERAL_KNOWLEDGE')

  function handleChange(e){
          setSelectedCategory(e.target.value)
          console.log(triviaData[0])        
  }

  return (
    <main className="main">
        {section === "home-section" && 
          <div className="home-screen">
          <div className="title">Trivia Game</div>
          <div className="description">
            Pick a category, complete a trivia, and get graded!</div>
          <button 
          className="start-button"
          onClick={ () => 
          changeSection("trivia-section")}>
            Start</button>

            <div className="select-wrapper">
                <h2 className="select-label">Select a Category</h2>
                <select 
                className="category-selection"
                name="CATEGORY_SELECTION" 
                id="CATEGORY_SELECTION"
                value={selectedCategory}
                onChange={handleChange}>
                    <option value="GENERAL_KNOWLEDGE">General Knowledge</option>
                    <option value="SCIENCE_NATURE">Science & Nature</option>
                    <option value="ANIMALS">Animals</option>
                </select>

            </div>

          <div className="author">Developed by Umar Ahmed</div>
        </div>
        }

        {section === "trivia-section" && 
          <Trivia
          category={selectedCategory}
          />
        
        }

    </main>
  );
}
