import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
const [starz, setStarz] = useState({people: [], planets: []});

useEffect(() => {
 function peopleplanets (){
  axios.all([axios.get(urlPeople), axios.get(urlPlanets)])

  .then(axios.spread((peopleResponse, planetsResponse) =>{
    const peopleData = peopleResponse.data;
    const planetsData = planetsResponse.data;
    setStarz({people: peopleData, planets: planetsData});
   
    
  }))

  .catch(err =>{
    console.log(err.message)
  })
 }
  peopleplanets();
})

  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
            {starz.people.map(person => (
              <Character key={person.name} data={person} planets = {starz.planets} />
            ))}

    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
