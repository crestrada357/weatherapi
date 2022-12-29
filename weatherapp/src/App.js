import './App.css';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys';
import { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState({city:'', temp:''});
  const getWeather= async(e)=>{
    e.preventDefault();
      const {city,country}=e.target.elements;
      const cityValue = city.value;
      const countryValue = country.value;
    if(cityValue!==''){
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&APPID=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      if(data.cod===200){
        setWeatherData({
          temp:data.main.temp,
          city:data.name,
          error:null
        })
      }else{
        setWeatherData({
          temp:'',
          city:'',
          error:data.message
        })
      }
    }else{
      setWeatherData({
        temp:'',
        city:'',
        error:'A city name must be provided'
      })
    }
  }
  
  return (
    <div className="App">
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-4 mx-auto'>
            <WeatherForm getWeather={getWeather}/>
            <WeatherInfo {...weatherData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
