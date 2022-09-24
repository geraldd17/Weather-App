import { useEffect, useState } from 'react'
import './App.css'
import Weather from './components/Weather'
import axios from 'axios'
import imagen from './assets/RD.png'

function App() {
  
  const [coordinates, setCoordinates] = useState()
  const [water, setwater] = useState()



  useEffect(() => {
      const success = position => {

          const obj = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
          }
          setCoordinates(obj)
      }
      navigator.geolocation.getCurrentPosition(success)
  }, [])



  // **********************     PETICION    ************************************

  useEffect (() => {
      if (coordinates) {
          const APIKEY = "183fdbb4a3883e7ecd2dd95c25d7b4ba"
          const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${APIKEY}`
          axios.get(URL)
          .then(res => setwater(res.data))
          .catch(err  => console.log(err))
      }
  }, [coordinates])

  

  return (
    <div className="App"> 
      <Weather
       water={water}
       imagen= {imagen}
      />
    </div>
  )
}

export default App
