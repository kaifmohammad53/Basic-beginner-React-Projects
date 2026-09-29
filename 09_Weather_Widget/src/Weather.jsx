import { useState } from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './App.css'
import InfoBox from './InfoBox';
import Alert from "@mui/material/Alert";

function Weather({ weather, updateInfo }) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);
  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = "186148eb397fe4424a99b21d62bcc0f5";

  let getWeatherInfo = async () => {
    try{
      let response = await fetch(
      `${URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    let jsonResponse = await response.json();
    let result = {
      city:city,
      weather: jsonResponse.weather[0].description,
      temp: jsonResponse.main.temp,
      tempmin: jsonResponse.main.temp_min,
      tempmax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
    };
    console.log(result);
    return result;
    }
    catch(err){
      throw error;
    }
    
  };
  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
    try{
      e.preventDefault();
      setCity("");
      setError(false);
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }
    catch(err){
      setError(true);
    }
    
  };
  return (
    <>
      <div className="h-auto w-screen flex flex-col justify-center items-center gap-8 pt-20 pb-20">
        <h1 className="text-4xl font-seriff font-semibold">
          Search Weather For Your City
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-row w-2/5 gap-5">
          <TextField
            id="City"
            label="City Name"
            variant="outlined"
            value={city}
            required
            fullWidth
            onChange={handleChange}
          />
          <Button type="submit" className="w-1/5" variant="contained">
            Click me
          </Button>
        </form>
        {error && <Alert severity="error">This City's Weather deatils Not Found</Alert>}
        <InfoBox info={weather} />
      </div>
    </>
  );
}

export default Weather
