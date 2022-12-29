import React from "react";

const WeatherInfo = (props) =>{
    console.log(props);
    return (
        <div className="card card-body">
            It is {props.temp} °C in {props.city}
        </div>
    )
}

export default WeatherInfo