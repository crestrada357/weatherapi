import React from "react";

const WeatherInfo = (props) =>{
    console.log(props);
    let result = '';
    if(props.error===null){
        result= `It is ${props.temp} °C in ${props.city}`;
    }else if(props.error!== undefined){
        result=`Error: ${props.error}`;
    }
    else{
        result='';
    }
    return (
        <div className="card card-body">
            {result}
        </div>
    )
}

export default WeatherInfo