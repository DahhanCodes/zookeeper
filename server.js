const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();
function filterByQuery(query, animalsArray){
    let filteredResults= animalsArray;
    let personalityTraitsArray = []
//by personality
    if (query.personalityTraits){
        //save personalityTraits as a dedicated array
        //If personalityTraits is a string, place it into a new array and save
        if (typeof query.personalityTraits === 'string'){
            personalityTraitsArray = [query.personalityTraits]
        }else{
            personalityTraitsArray = query.personalityTraits
        }
    }
    //loop through each trait in the personalityTraits array
    personalityTraitsArray.forEach(trait => {
        //check the trait against each animal in the filteredResults array
        //Remember, it is initially a copy of the animalsArray
        //but here we're updating it for each trait in the .foreach() loop
        //for each trait being trageted by the filter, the filteredResults array
        //will then contain only 
        
    });

//by diet
    if (query.diet){
        filteredResults= filteredResults.filter(animal => animal.diet === query.diet)
    }
    if (query.species){
        filteredResults= filteredResults.filter(animal => animal.species === query.species)
    }
    if (query.name){
        filteredResults = filteredResults.filter(animal => animal.name === query.name)
    }
    return filteredResults
}
//get requires a string that describes the route the client will have to fetch from 
//second get argument is a call back function that will execute every time that route is accessed with a get request
app.get('/api/animals', (req,res) => {
    //
    let results =animals;
    if (req.query){
        results = filterByQuery(req.query, results)
    }
    res.json(results)

})
app.listen(PORT,() =>{
    console.log(`API server now on port ${PORT}!`)
})
const {animals}= require('./data/animals.json')