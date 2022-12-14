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
  const [selectedCategory,setSelectedCategory] = React.useState('CHOOSE')
  //function to change selected category
  function handleChange(e){
    setSelectedCategory(e.target.value)
  }

  //logic for getting data everytime the selected category changes
  const [data,setData] = React.useState([])
  React.useEffect( () => {
    if(!revealAnswers){
      if(selectedCategory === 'GENERAL_KNOWLEDGE'){
        fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
        .then(res => res.json())
        .then(dataRecieved => setData(dataRecieved.results))
        .then(data => mapData(data))
      }
      if(selectedCategory === 'SCIENCE_NATURE'){
        fetch('https://opentdb.com/api.php?amount=5&category=17&type=multiple')
        .then(res => res.json())
        .then(dataRecieved => setData(dataRecieved.results))
        .then(data => mapData(data))
      }
      if(selectedCategory === 'ANIMALS'){
        fetch('https://opentdb.com/api.php?amount=5&category=27&type=multiple')
        .then(res => res.json())
        .then(dataRecieved => setData(dataRecieved.results))
        .then(data => mapData(data))
      }
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
  //default the score is 0
  const [score,setScore] = React.useState(0)
  //Reveal answers boolean
  const [revealAnswers,setRevealAnswers] = React.useState(false)
  //function to check how many answers they got correct
  function checkAnswers(){
    //if the answers are not revealed we find the score and disdplay it
    if(!revealAnswers){
      let sum=0
    data.forEach(item => {
      if(item.selected_answer === item.correct_answer){
        sum+=1
      }
      setScore(sum)
    })
    //reveal the answers
    setRevealAnswers(true)
    }
    //if answers are revealed we want to reset gamestate  
    else{
      setRevealAnswers(false)
      setSection("home-section")
      setSelectedCategory("CHOOSE")
    }
    
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
          data = {data}
          setData = {setData}
          checkAnswers = {checkAnswers}
          score = {score}
          revealAnswers = {revealAnswers}
          />
        }

    </main>
  );
}
