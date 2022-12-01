import React from 'react'

export default function Select(){
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


    console.log(CATEGORIES.GENERAL_KNOWLEDGE)

    return (
        <div className="select-screen">
            <select 
          name="CATEGORY_SELECTION" 
          id="CATEGORY_SELECTION">
                <option value="choose">--CHOOSE--</option>
                <option value="GENERAL_KNOWLEDGE">General Knowledge</option>
                <option value="SCIENCE_NATURE">Science & Nature</option>
                <option value="ANIMALS">Animals</option>
            </select>
        </div>
    )

}

