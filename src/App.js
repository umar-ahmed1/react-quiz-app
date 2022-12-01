import React from 'react'
import Trivia from './components/Trivia'
import Home from './components/Home'

export default function App() {

  //default render the home section
  const [section,setSection] = React.useState("home-section")

  //function that changes the section rendered to a different section
  function changeSection(newSection){
    setSection(newSection)
  }

  const [selectedCategory,setSelectedCategory] = React.useState('GENERAL_KNOWLEDGE')

  function handleChange(e){
    setSelectedCategory(e.target.value)
  }

  return (
    <main className="main">
        {section === "home-section" && 
        <Home
        changeSection={changeSection}
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        />}

        {section === "trivia-section" && 
          <Trivia
          category={selectedCategory}
          />
        
        }

    </main>
  );
}
