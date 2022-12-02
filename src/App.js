import React from 'react'
import Trivia from './components/Trivia'
import Home from './components/Home'

export default function App() {

  //by default render the home section
  const [section,setSection] = React.useState("home-section")
  //function that changes the section rendered to a different section
  function changeSection(newSection){
    setSection(newSection)
  }

  //state for selected category which is changed by the home component
  const [selectedCategory,setSelectedCategory] = React.useState('GENERAL_KNOWLEDGE')
  //function to change selected category
  function handleChange(e){
    setSelectedCategory(e.target.value)
  }

  //logic for getting data
  const [data,setData] = React.useState([])
  React.useEffect( () => {
    if(selectedCategory === 'GENERAL_KNOWLEDGE'){
      fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
      .then(res => res.json())
      .then(dataRecieved => setData(dataRecieved.results))
    }
    if(selectedCategory === 'SCIENCE_NATURE'){
      fetch('https://opentdb.com/api.php?amount=5&category=17&type=multiple')
      .then(res => res.json())
      .then(dataRecieved => setData(dataRecieved.results))
    }
    if(selectedCategory === 'ANIMALS'){
      fetch('https://opentdb.com/api.php?amount=5&category=27&type=multiple')
      .then(res => res.json())
      .then(dataRecieved => setData(dataRecieved.results))
    }

  },[selectedCategory])







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
          data = {data}
          />
        
        }

    </main>
  );
}
