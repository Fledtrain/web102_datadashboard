import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const API_KEY = import.meta.env.VITE_BACKUP_API_KEY

const WeatherDetail = () => {
    const params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    // Fetch data from API
    useEffect(() => {
        const fetchWeather = async () => {
            const res = await fetch(
                `https://api.weatherbit.io/v2.0/current?&city=${params.city}&key=${API_KEY}`
            );
            const data = await res.json();
            setFullDetails(data?.data[0]);
        }
        if (params.city) {
            fetchWeather();
        }
    }, [])
    return (
        <>
            <section className="card bg-neutral text-neutral-content">
                <div className="card-body ">
                    <p>City: {params.city}</p>
                    <p>Date: {params.date}</p>
                    <p>Weather: {fullDetails?.weather.description}</p>
                    <p>Elevation Angle: {fullDetails?.elev_angle}</p>
                    <p>Wind Speed: {fullDetails?.wind_spd}</p>
                    <p>Visibility: {fullDetails?.vis}%</p>
                    <p>Humidity: {fullDetails?.rh}%</p>
                    <p>Dew Point: {fullDetails?.dewpt}%</p>
                </div>
            </section>
        </>
    )
}

export default WeatherDetail