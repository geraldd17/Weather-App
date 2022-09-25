import React, { useState } from "react"




const Weather = ({ water, imagen }) => {
    const [tem, setTem] = useState(true)
    const handleButton = () => setTem(!tem)

    let celsius = (water?.main.temp - 273.15).toFixed(1)
    function convertAf(celsius) {
        let fahrenheit = (celsius * 9 / 5) + 32
        return fahrenheit
    }


    let url = "http://openweathermap.org/img/wn/"
    let iconUrl = url + water?.weather[0].icon + "@4x.png"
    const iconotem = water?.weather[0].icon

   // <img className="card-icon2" src={`http://openweathermap.org/img/wn/${iconotem}@2x.png`} alt="icon-temp"  />
   // <img className="icon" src="https://openweathermap.org/img/wn/02d@2x.png" alt="Ups, something went wrong, Please refresh">


    return (

        <section className='section-card container'>
            <img className="card-img" src={imagen} alt="imagen-RD" />
            <h1 className="card-title">Weather App</h1>
            <h2 className='card-city'>{`${water?.name}, ${water?.sys.country}`}</h2>
            <p className="card-icon"><img src={ water ? iconUrl : ""} alt="icon-temp" /></p>
            <img className="card-icon2" src={`https://openweathermap.org/img/wn/${iconotem}@2x.png`} alt="icon-temp"  />

            <p className="card-clouds">"{water?.weather[0].description}"</p>
            <p className="speed"><i className="fa-solid fa-wind"> </i><span>Wind Speed:</span> {water?.wind.speed}m/s</p>
            <p className="Clouds"><i className="fa-solid fa-cloud"></i><span>Clouds:</span> {water?.clouds.all}%</p>
            <p className="Pressure"><i className="fa-solid fa-temperature-three-quarters"></i><span className="pressuree">Pressure:</span> {water?.main.pressure}hPa</p>
          

            <button onClick={handleButton} className="card-btn">Degrees °C/°F </button>
            {
                tem ?
                    <p className="card-tem"> {celsius} °C</p> :

                    <p className="card-tem"> {(convertAf(celsius)).toFixed(1)} °F</p>
            }
        </section>
    )
}

export default Weather