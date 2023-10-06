
import { apiKeyPrivate} from "../apikey";

import { useEffect, useState } from "react";

const Weather = ({ place }) => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = apiKeyPrivate;
    const position = place
    const lat = position[0];
    const lon = position[1];

    useEffect(() => {
        if(!position || position.length !== 2) {
            return;
        };

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)

    }, [place, apiKey]);

    return (

    );
};

export default Weather;