import { useState } from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './App.css'

function App() {
  let [city, setCity] = useState("");
  const URL=`https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY="186148eb397fe4424a99b21d62bcc0f5";
  
  let getWeatherInfo=async()=>{
    let response=await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    let result={
      weather:jsonResponse.weather[0].description,
      temp:jsonResponse.main.temp,
      tempmin:jsonResponse.main.temp_min,
      tempmax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelslike:jsonResponse.main.feels_like
    }
    console.log(result);
  }
  let handleChange=(e)=>{
    setCity(e.target.value);
  }
  let handleSubmit=(e)=>{
    // console.log(city);
    e.preventDefault();
    setCity("");
    getWeatherInfo();

  }
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-8">
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
            <Button type='submit' className="w-1/5" variant="contained">
              Click me
            </Button>
          </form>
      </div>
    </>
  );
}

export default App
