import { useState } from "react"
import InfoBox from "./InfoBox"
import Weather from "./Weather"
const WeatherInfo = () => {
    let [weather, setWeather]=useState({
        city:"Delhi",
        feelslike: 28.87,
        humidity:64,
        temp:27.34,
        tempmax: 27.34,
        tempmin: 27.34,
        weather: "clear sky"
    })
    let updateInfo=(newInfo)=>{
        setWeather(newInfo);
    }
  return (
    <div>
      <Weather weather={weather} updateInfo={updateInfo} />
    </div>
  );
}
export default WeatherInfo