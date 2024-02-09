import React,{useState, useEffect} from 'react'



// how to properly fetch data from the App to use to match information ****

function Character({data, planets}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
    const [showHomeworld, setshowHomeworld] = useState(false);
    const [homeworldName, setHomeworldname]= useState('');

    useEffect(() => {

      const fetchHomeworldName =  () => {

          const homeworld = planets.find(planet => planet.id === data.homeworld);
          if(homeworld){
            setHomeworldname(homeworld.name)
          }
        };

        if(showHomeworld){
          fetchHomeworldName();
        }
      }), [data.homeworld,planets,showHomeworld];

    const toggleWorld = () => {

      setshowHomeworld(!showHomeworld);
    }

   



  return (
    <div className = "character-card" onClick={toggleWorld} >
      {/* Use the same markup with the same attributes as in the mock */}

      <h3 className = "character-name" >{data.name}</h3>
      {showHomeworld &&  <p className = "character-planet"> Planet: {homeworldName || 'loading...'}</p>}
     
      
    </div>
  )
}

export default Character
