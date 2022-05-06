import { Button } from '@mui/material';
import React, {useState } from 'react'
import CapitalWeather from './CapitalWeather';
import DataList from './DataList';

export default function CountryData() {
    const [data, setData] = useState<any>([])
    const [searchData, setSearchData] = useState<any>()

    const handleSubmit = async() => {
        await fetch (`https://restcountries.com/v2/name/${searchData}`)
        .then(res => res.json())
        .then((result) => {
            console.log(result)
            setData(result)
        })
        
    }

  return (
    <div>
        <h1>CountryData</h1>
        <input 
            type='text'
            placeholder='Enter Country Name'
            onChange={(e) => setSearchData(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        {
            data.map((item:any) => {
                return (
                    <>
                        <div>{item.name}</div>
                        <div>{item.capital}</div>
                        <div>{item.population}</div>
                        <div>{item.latlng}</div>
                        <div><img width={300} height={300} src={item.flag} alt="flag"/></div>
                    </>
                )
            })
        }
        <DataList data={data}/>
    </div>
  )
}
