import { Button, Container, Grid, TextField, Typography,ImageList, ImageListItem, CardContent, Card } from '@mui/material';
import React, {useState} from 'react';

export default function FetchCountry() {

    const [countryData, setcountryData] = useState("")
    const [showData, setShowData] = useState("");
    const [population, setPopulation] = useState("");
    const [capital, setcapital] = useState("");
    const [latlng, setlat] = useState("");
    const [Flag, setFlag] = useState("");

    //weather
    const [weatherdata, setweatherdata] = useState("")
    const [icon, seticon] = useState()
    const [speed, setspeed] = useState("")
    const [precip, setprecip] = useState("")

    const handleSubmit = async() => {
        
        let countryName = countryData
        
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const result = await res.json()
        console.log(result)
        setShowData(result[0].name.common)
        setPopulation(result[0].population)
        setcapital(result[0].capital)
        setlat(result[0].latlng)
        setFlag(result[0].flags.png)
        setcountryData("")
    }

    const loadData = async() => {
        let capitaltemp = capital
        const apko = await fetch(`http://api.weatherstack.com/current?access_key=5774dadda1557999223af527fb341c49&query=${capitaltemp}`)
        const result = await apko.json();
        console.log(result);
        setweatherdata(result.current.temperature)
        seticon(result.current.weather_icons)
        setspeed(result.current.wind_speed)
        setprecip(result.current.precip)
    }
  return (
    <div>
        <h1>FetchCountry</h1>
        <Container style={{ backgroundColor: '#cfe8fc'}}>
            <Grid p={5} mt={5}>
                <TextField
                    type="text" 
                    label="Enter Country Name"
                    variant="outlined" 
                    name="name"
                    value={countryData} 
                    onChange={(e) => setcountryData(e.target.value)} 
                    // required 
                />
            </Grid>
            <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                <Card className='cardBox'>
                    <CardContent >
                        <ImageListItem>
                            <img src={Flag} alt="CountryImage" />
                        </ImageListItem>
                        <Typography variant="h5" component="h2"><span>Country Name:</span> {showData}</Typography>
                        <Typography variant="h5" component="h2"> <span>Population:</span> {population}</Typography>
                        <Typography variant="h5" component="h2"><span>Capital Name:</span> {capital}</Typography>
                        <Typography variant="h5" component="h2"><span>Lat-Lng:</span> {latlng}</Typography>
                    </CardContent>
                </Card>  
                    <Button onClick={loadData} variant="outlined"> Capital Weather </Button>
                    <Card className='tempCardBox'>
                        <CardContent>
                            <ImageListItem> <img src={icon} alt="imaghi"/></ImageListItem>
                            <Typography variant="h5" component="div">Temprature: {weatherdata} &deg;C</Typography>
                            <Typography>Wind_Speed: {speed} km/h</Typography>
                            <Typography>Precip: {precip}</Typography>
                        </CardContent>
                    </Card>
        </Container>
    </div>
  )
}
