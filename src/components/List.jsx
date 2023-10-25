import { useEffect, useState } from "react"
import Card from "./Card"
import Form from "./Form"
import { FaCloud, FaLink, FaRadiationAlt, FaTemperatureHigh } from 'react-icons/fa'
import { RiBaseStationFill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import WeatherChart from "./WeatherChart"


const API_KEY = import.meta.env.VITE_BACKUP_API_KEY
// List - a box container that stores a continuous group of information
const List = () => {
    const [form, setForm] = useState([])
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // For parameters
    const [city, setCity] = useState("Raleigh");
    const [state, setState] = useState("NC");
    const [country, setCountry] = useState("US");
    const [units, setUnits] = useState("M")
    const [sunset, setSunset] = useState('');

    // For Weekly weather data
    const today = new Date();
    const formattedDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [weeklyData, setWeeklyData] = useState(null);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState(formattedDate);
    const [selectedRadio, setSelectedRadio] = useState('Daily');

    // API call has been made
    const [apiCallMade, setApiCallMade] = useState(false);

    // console.log(data?.city_name)
    // console.log(data?.app_temp)
    // console.log(data?.uv)
    // console.log(data?.weather.description)

    
    /** Function that Searches for city
     * @param {string} e - event from the input field
     * @returns {string} city - city name
     */
    const search = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }

    /** Function that sets the end date
     * @param {string} e - event from the input field
     * @returns {string} endDate - end date 
     */
    const searchDate = (e) => {
        e.preventDefault()
        setStartDate(e.target.value)
    }

    /** Function that Submits the form
     * @param {string} e - event from the select field 
     * @returns {Array} updated form - city and units
     */
    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        setForm([city, units, startDate, endDate])

        setApiCallMade(false);
    }

    useEffect(() => {
        /** Fetches daily weather data from the API
         * @async
         * @returns {Object} data - weather data
         */
        const fetchWeather = async () => {
            const res = await fetch(
                `https://api.weatherbit.io/v2.0/current?&city=${form[0]}&units=${form[1]}&key=${API_KEY}`
            );
            const data = await res.json();
            setData(data?.data[0]);
            setCountry(data?.data[0].country_code);
            setSunset(data?.data[0].sunset);
            setState(data?.data[0].state_code);
            setLoading(false);
            console.log(data);
            setWeeklyData(null);
            // Set the flag to true after the API call is made
            setApiCallMade(true);
        };

        if (selectedRadio === "Daily" && !apiCallMade) {
            fetchWeather();
        }
    }, [form, selectedRadio, apiCallMade]);

    useEffect(() => {
        /** Fetches weekly weather data from the API
         * @async
         * @returns {Object} data - weather data
         */
        const fetchWeatherWeekly = async () => {
            const res = await fetch(
                `https://api.weatherbit.io/v2.0/history/daily?&city=${form[0]}&units=${form[1]}&start_date=${form[2]}&end_date=${form[3]}&key=${API_KEY}`
            );
            const data = await res.json();
            setWeeklyData(data);
            console.log(data);
            setData(null)
            setLoading(false);
            // Set the flag to true after the API call is made
            setApiCallMade(true);
        };

        if (selectedRadio === "Weekly" && !apiCallMade) {
            fetchWeatherWeekly();
        }
    }, [form, selectedRadio, apiCallMade]);

    console.log(weeklyData)
    return (
        <>
            <section className="ml-0 md:ml-40 lg:ml-20 ">
                <section className='mb-5'>
                    <div className='flex space-x-4'>
                        <Card city={city}>City</Card>
                        <Card country={country}>Country</Card>
                        <Card sunset={sunset}>Sunset</Card>
                    </div>
                </section>
                <section className="text-center">
                    <Form
                        search={search}
                        setUnits={setUnits}
                        loading={loading}
                        submit={submit}
                        selectedRadio={selectedRadio}
                        setSelectedRadio={setSelectedRadio}
                        endDate={endDate}
                        searchDate={searchDate}
                    />
                    <div>
                        <table className="table sm:table-md mt-5">
                            <thead className="bg-neutral text-white text-center" >
                                <tr>
                                    <th>Link
                                        <FaLink
                                            className="ml-1 mb-1 inline-block" ></FaLink>
                                    </th>
                                    <th>State 🗿</th>
                                    <th>Station
                                        <RiBaseStationFill
                                            className="ml-1 mb-1 inline-block" ></RiBaseStationFill>
                                    </th>
                                    <th>Temperature
                                        <FaTemperatureHigh
                                            className="ml-1 mb-1 inline-block" ></FaTemperatureHigh></th>
                                    <th>UV Level
                                        <FaRadiationAlt
                                            className="ml-1 mb-1 inline-block" ></FaRadiationAlt>
                                    </th>
                                    <th>Cloudy Percentage
                                        <FaCloud
                                            className="ml-1 mb-1 inline-block" ></FaCloud></th>
                                    <th>X - Coords</th>
                                    <th>Y - Coords</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    <tr className="text-center" key={state}>
                                        <td>
                                            <Link to={`/weather/${city}/${data?.datetime}`}>
                                                <FaLink
                                                    className="ml-1 mb-1 inline-block" ></FaLink>
                                            </Link>
                                        </td>
                                        <td>{state}</td>
                                        <td>{data?.station}</td>
                                        <td>{data?.app_temp}
                                            {units === "M" && <> Celsius</>}
                                            {units === "I" && <> Fahrenheit</>}
                                            {units === "S" && <> Kelvin</>}
                                        </td>
                                        <td>{data?.uv}</td>
                                        <td>{data?.clouds}%</td>
                                        <td>{data?.lon}</td>
                                        <td>{data?.lat}</td>
                                    </tr>
                                }
                                {weeklyData && weeklyData?.data.map((item) => {
                                    return (
                                        <tr className="text-center" key={item.name}>
                                            <td>
                                                <Link to={`/weather/${city}/${item?.datetime}`}>
                                                    <FaLink
                                                        className="ml-1 mb-1 inline-block" ></FaLink>
                                                </Link>
                                            </td>
                                            <td>{weeklyData.state_code}</td>
                                            <td>{weeklyData?.station_id}</td>
                                            <td>{item?.temp}
                                                {units === "M" && <> Celsius</>}
                                                {units === "I" && <> Fahrenheit</>}
                                                {units === "S" && <> Kelvin</>}
                                            </td>
                                            <td>{item?.max_uv}</td>
                                            <td>{item?.clouds}%</td>
                                            <td>{weeklyData?.lat}</td>
                                            <td>{weeklyData?.lon}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {
                            weeklyData &&
                            <WeatherChart weeklyData={weeklyData} />
                        }
                    </div>
                </section>
            </section >
        </>
    )
}

export default List