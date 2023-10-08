
import { apiKeyPrivate} from "../apikey";
import

import { useEffect, useState } from "react";

const Weather = ({ place, city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = apiKeyPrivate;
    

    useEffect(() => {
        if(!place || place.length !== 2) {
            return (
                <p>When you modify place constant...</p>
            );
        };

        const [lat, lon] = place;

        // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        //     .then((response) => {
        //         if(!response.ok) {
        //             throw new Error("Network response was not ok");
        //         }
        //         return response.json();
        //     })
        //     .then((data) => {
        //         setWeatherData(data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

    }, [place, apiKey]);

    return (
        <section>
            {weatherData ? (
                <article>
                    <h2>Weather at: {city}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Conditions: {weatherData.weather[0].description}</p>
                </article>
            ) : (
                <p>Loading weather data...</p>
            )}
        </section>
    );
};

export default Weather;