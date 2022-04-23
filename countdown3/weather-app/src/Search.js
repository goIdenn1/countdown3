import {useRef} from "react"
import TextField from '@mui/material/TextField';

const Search = (props) => {
    /*london test code */
    const key = process.env.REACT_APP_weather_key
    const location = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={key}";
    const textFieldRef = useRef();
   
    return (
        <div>
             <TextField id="myTextField" label="Text Field" variant="outlined" inputRef={textFieldRef} />
             <button onClick={() => console.log(textFieldRef.current.value)}>Log Input</button>
        </div>
        );
}

export default Search