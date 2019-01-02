import React  from "react";

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { __await } from "tslib";

const API_KEY = '0b3ec005aade5c726c4660777fad6030'; //openweathermap.org 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}

class App extends React.Component {

  state = {
    humidity: undefined,
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined

  }
  getWeather = async (e) => {
    
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather/?q=${city},${country}&APPID=${API_KEY}`);

    const data = await api_call.json();
    console.log(data);

    if (city === true && country === true) {

      this.setState({
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          error: ''
      });
    } else {

        this.setState({

      humidity: undefined,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: "Please, insert the City and Country values."
        });

    }
    
  };

  render(){
    return(
      <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title.container">
                    <Titles /> 
                    </div>                  
                  
                  <div className="col-xs-7 form.container">
                    <Form getWeather={this.getWeather}/>
                      
                      <Weather
                        temp={this.state.temp}
                        temp_max={this.state.temp_max}
                        temp_min={this.state.temp_min}
                        humidity={this.state.humidity}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        error={this.state.error}
                    />
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                  
        
    ); 
  }
};

export default App;

