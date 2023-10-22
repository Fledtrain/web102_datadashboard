import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const API_KEY = import.meta.env.VITE_BACKUP_API_KEY

const WeatherDetail = () => {
    const params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    // Fetch data from API
    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const res = await fetch(
                    `https://api.weatherbit.io/v2.0/alerts?&city=${params.city}&key=${API_KEY}`
                );
                const data = await res.json();
                setFullDetails(data);
            }
        }
        catch (error) {
            console.error(error)
        }
        // fetchWeather();
    }, [fullDetails, params.city])

    console.log(fullDetails)
    return (
        <>
            <div>{params.city}</div>
            <div>{params.date}</div>
        </>
    )
}

export default WeatherDetail