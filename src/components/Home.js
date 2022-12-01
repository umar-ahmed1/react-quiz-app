import React from 'react'

export default function Home(props){
    //make the api call and store the data as a state
    const [allGeneralKnowledge,setAllGeneralKnowledge] = React.useState([])
    const [allScienceNature,setAllScienceNature] = React.useState([])
    const [allAnimals,setAllAnimals] = React.useState([])
    React.useEffect( () => {
        fetch('https://opentdb.com/api.php?amount=5&category=9')
        .then(res => res.json())
        .then(dataRecieved => setAllGeneralKnowledge(dataRecieved.results))

        fetch('https://opentdb.com/api.php?amount=5&category=17')
        .then(res => res.json())
        .then(dataRecieved => setAllScienceNature(dataRecieved.results))

        fetch('https://opentdb.com/api.php?amount=5&category=27')
        .then(res => res.json())
        .then(dataRecieved => setAllAnimals(dataRecieved.results))

    },[]);    
    
    //different categories stored from all the api calls
    const CATEGORIES = {
        GENERAL_KNOWLEDGE: allGeneralKnowledge,
        SCIENCE_NATURE: allScienceNature,
        ANIMALS: allAnimals
    }

    const [selectedCategory,setSelectedCategory] = React.useState('GENERAL_KNOWLEDGE')

    function handleChange(e){
            setSelectedCategory(e.target.value)          
    }


    return (
        <div className="home-screen">
          <div className="title">Trivia Game</div>
          <div className="description">
            Pick a category, complete a trivia, and get graded!</div>
          <button 
          className="start-button"
          onClick={ () => props.changeSection("select-section")}>Start</button>

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
    )

}

