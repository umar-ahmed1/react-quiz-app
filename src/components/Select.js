import React from 'react'

export default function Select(){
    //make the api call and store the data as a state
    const [allQuestions,setAllQuestions] = React.useState([])
    React.useEffect( () => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(res => res.json())
        .then(dataRecieved => console.log(dataRecieved))
    },[]);    





    return (
        <div className="select-screen">
          <div>Developed by Umar Ahmed</div>
        </div>
    )

}

