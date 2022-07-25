import TinderCard from "react-tinder-card"
import Chatcontainer from "./Chatcontainer";
import {useState} from "react"

const Dashboard = () => {
    
const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https://imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://imgur.com/oPj4A8u.jpg'
    }
  ]

  
    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            <Chatcontainer />
            <div className="swipe-container">
                <div className="card-container">
                {characters.map((character) =>
          <TinderCard 
          className='swipe' 
          key={character.name} 
          onSwipe={(dir) => swiped(dir, character.name)} 
          onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
            className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
        <div className="swipe-info">{lastDirection ? <p>You swiped {lastDirection}
                    </p> : <p></p>}</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard; 