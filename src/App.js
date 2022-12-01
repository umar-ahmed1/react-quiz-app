import React from 'react'
import Home from './components/Home'
import Trivia from './components/Trivia'

export default function App() {
  //default render the home section
  const [section,setSection] = React.useState("home-section")

  //function that changes the section rendered to a different section
  function changeSection(newSection){
    setSection(newSection);
  }



  return (
    <main className="main">
        {section === "home-section" && 
        <Home
        changeSection = {changeSection}
        />
        }
        {section === "trivia-section" && 
        <Trivia
        />
        }

    </main>
  );
}
