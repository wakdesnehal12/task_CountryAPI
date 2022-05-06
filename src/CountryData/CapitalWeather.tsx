import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import DataList from './DataList';

export default function CapitalWeather(props:any) {
    // let weatherData = props.data
    // <DataList weatherData={data}/>
    const [weatherData, setWeatherData] = useState<any>([]);
    const [weatherSearch, setWeatherSearch] = useState<any>();
    
    const handleClick = () => {
         fetch(`http://api.weatherstack.com/current?access_key=5774dadda1557999223af527fb341c49&query=${weatherSearch}`)
        .then(res => res.json())
        .then((result) => 
        {
            console.log(result) 
            setWeatherData(result)
        })
        .catch((err) => {
            console.log(err)
            setWeatherData(err)
        })
    }

    // useEffect(() => {
        handleClick();
    // },[])

    
    return (
    <div>
        <h1>Capital Weather</h1>
        <input
            type="text"
            onChange={(e) => setWeatherSearch(e.target.value)}
        />
        <Button onClick={handleClick}>Submit</Button>
        {
            weatherData.map((item:any) => {
                return (
                    <>
                        <p>{item.temperature}</p>
                        <p>{item.weather_icons}</p>
                        <p>{item.wind_speed}</p>
                        <p>{item.precip}</p>
                    </>
                )
            })
        }
    </div>
  )
}
