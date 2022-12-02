import React from 'react'
import Trivia from './components/Trivia'
import Home from './components/Home'
import {nanoid} from 'nanoid'

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

  //logic for getting data everytime the selected category changes
  const [data,setData] = React.useState([])
  React.useEffect( () => {
    if(selectedCategory === 'GENERAL_KNOWLEDGE'){
      fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
      .then(res => res.json())
      .then(dataRecieved => setData(dataRecieved.results))
      .then(data => mapData(data))
    }
    if(selectedCategory === 'SCIENCE_NATURE'){
      fetch('https://opentdb.com/api.php?amount=5&category=17&type=multiple')
      .then(res => res.json())
      .then(dataRecieved => mapData(dataRecieved.results))
    }
    if(selectedCategory === 'ANIMALS'){
      fetch('https://opentdb.com/api.php?amount=5&category=27&type=multiple')
      .then(res => res.json())
      .then(dataRecieved => mapData(dataRecieved.results))
    }
  },[selectedCategory])

  //function to create the object with the data
  function mapData(data){
    setData(prevData => prevData.map(data => {
      data.key=nanoid()
      //create an array with all the answers then shuffle it
      data.all_answers=[data.correct_answer,...data.incorrect_answers]
      for (var i = data.all_answers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = data.all_answers[i];
      data.all_answers[i] = data.all_answers[j];
      data.all_answers[j] = temp;
      }

      return {
        key:data.key,
        question:data.question,
        correct_answer:data.correct_answer,
        incorrect_answers:data.incorrect_answers,
        all_answers:data.all_answers,
        selected_answer:null
      }
    }))
  }

  //we want an effect ot run everytime the data is changed to see if any of
  //the answers have been selected or not to change their color
  React.useEffect( () => {
    

  },[data])






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
          setData = {setData}
          />
        }

    </main>
  );
}
