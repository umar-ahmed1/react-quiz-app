
    //different categories stored from all the api calls
    const CATEGORIES = {
        GENERAL_KNOWLEDGE:[],
        SCIENCE_NATURE:[],
        ANIMALS: []
    }

    //make the api call and store the data
    fetch('https://opentdb.com/api.php?amount=5&category=9')
    .then(res => res.json())
    .then(dataRecieved => CATEGORIES.GENERAL_KNOWLEDGE = dataRecieved.results)

    fetch('https://opentdb.com/api.php?amount=5&category=17')
    .then(res => res.json())
    .then(dataRecieved => CATEGORIES.SCIENCE_NATURE = dataRecieved.results)

    fetch('https://opentdb.com/api.php?amount=5&category=27')
    .then(res => res.json())
    .then(dataRecieved => CATEGORIES.ANIMALS = dataRecieved.results)



export default [CATEGORIES]