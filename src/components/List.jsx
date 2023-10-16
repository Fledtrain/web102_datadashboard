import { useEffect, useState } from "react"
import Card from "./Card"

const API_KEY = import.meta.env.VITE_API_KEY
// List - a box container that stores a continuous group of information
const List = () => {
    const [form, setForm] = useState([])
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // For parameters
    const [city, setCity] = useState("Raleigh");
    const [country, setCountry] = useState("US");
    const [units, setUnits] = useState("M")

    const [sunset, setSunset] = useState('');
    // Converting Celsius to Fahrenheit (C × 9/5) + 32 = F

    // console.log(data !== "")
    // console.log(data)
    // console.log(data?.city_name)
    // console.log(data?.app_temp)
    // console.log(data?.uv)
    // console.log(data?.weather.description)
    if (data) { console.log(JSON.stringify(data.city_name)) }
    // console.log(Object.values(data)?.map((item) => {
    //     console.log(item.city_name, item.app_temp, item.uv, item.weather.description);
    // }));

    const search = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        setLoading(true)
        setForm([city, units])
    }

    useEffect(() => {
        const fetchWeather = async () => {
            const res = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${form[0]}&units=${form[1]}&key=${API_KEY}`)
            const data = await res.json();
            setData(data.data[0]);
            setCountry(data.country_code);
            setSunset(data.sunset);
            setLoading(false);
        }

        // fetchWeather()
    }, [form])

    return (
        <>
            <section className="">
                <section className='p-4'>
                    <div className='flex space-x-4'>
                        <Card city={city}>City</Card>
                        <Card country={country}>Country</Card>
                        <Card sunset={sunset}>Sunset</Card>
                    </div>
                </section>
                <section className="">
                    <form>
                        <input
                            type="text"
                            placeholder="Enter City..."
                            className="input input-bordered w-full max-w-xs mr-2"
                            onChange={(e) => search(e)} />
                        <select
                            className="select select-bordered w-full max-w-xs mr-2"
                            onChange={(e) => setUnits(e.target.value)}>
                            <option value="DEFAULT" disabled selected>What Unit Temperature?</option>
                            <option value="M">Metric</option>
                            <option value="S">Scientific</option>
                            <option value="I">Fahrenheit</option>
                        </select>
                        {loading ?
                            <p
                                className="ml-6 loading loading-spinner text-info"
                            >
                            </p> :
                            <button
                                className="btn" onClick={submit}
                            >Search.</button>}
                    </form>
                    <div>
                        <table className="table mt-5">
                            <thead className="bg-neutral text-white text-center" >
                                <tr>
                                    <th className="">Station⌛</th>
                                    <th className="">Feels like Temperature🔥</th>
                                    <th className="">Elevation Angle💨</th>
                                    <th className="">Latitude🌌</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data ?
                                    <tr className="text-center">
                                        <td className="">{data?.station}</td>
                                        <td className="">{data?.app_temp} {units} unit</td>
                                        <td className="">{data?.uv}</td>
                                        <td className="">{data?.weather.description}</td>
                                    </tr> : <tr className="text-center">
                                        <td className="">Fill</td>
                                        <td className="">In {units} unit</td>
                                        <td className="">Data </td>
                                        <td className="">Above</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </section >
        </>
    )
}

export default List