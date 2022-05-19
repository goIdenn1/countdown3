import React, {useEffect, useRef, useState} from "react"
import TextField from '@mui/material/TextField';

const Search = (props) => {
    //states
    const [apiData, setApiData] = useState({});
    const [getLocation, setGetLocation] = useState();
    const [location, setLocation] = useState();
    const key = process.env.REACT_APP_weather_key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
        /*london test code */
    const location_url_test = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={key}";
    const textFieldRef = useRef();
   useEffect(()=>{
    fetch(url)
        .then((response) => response.json())
        .then((data) => setApiData(data))
   },[url])
   const input = (event) =>
   {
       setGetLocation(event.target.value);
   };
   const submitInput = () => {
       setLocation(getLocation);
   };
   const kelvinToF = (kelvin) =>{
    return (kelvin - 273.15).toFixed(2);
   };
    return (
        //const textFieldRef = useRef();

        <div>
             <TextField id="myTextField" label="Text Field" variant="outlined" inputRef={textFieldRef} />
             <button onClick={() => console.log(textFieldRef.current.value)}>Log Input</button>
             
        </div>
        );
}

export default Search