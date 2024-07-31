import SearchBox from "./SearchBox";
import Infobox from "./InfoBox";
import AirIcon from '@mui/icons-material/Air';
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Siliguri",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div let style={{ textAlign: 'center' }}>
            <h1 style={{color:"#600080",textDecoration:"underline"}}>Weather App by <i>Aarya!</i><AirIcon/></h1>
            <SearchBox updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    )
}
