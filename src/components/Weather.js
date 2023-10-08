
import { apiKeyPrivate} from "../apikey";
import styles from "../styles/weather.module.css";

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

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setWeatherData(data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [place, apiKey]);

    const kelvinToCelsius = (value) => {
        return (value - 273.15).toFixed(2);
    };

    return (
        <section>
            {weatherData ? (
                <article className={styles.mainArticle}>
                    <p className={styles.firstP}>Weather at: <span className={styles.firstSpan}>{city}</span></p>
                    <div className={styles.containerForInfo}>
                        <p>Temperature: <span className={styles.values}>{kelvinToCelsius(weatherData.main.temp)}°C</span></p>
                        <p>Conditions: <span className={styles.values}>{weatherData.weather[0].description}</span></p>
                    </div>
                </article>
            ) : (
                <p className={styles.mainArticle}>Loading weather data...</p>
            )}
        </section>
    );
};

export default Weather;