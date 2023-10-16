import { useEffect, useState } from "react"
import Card from "./Card"
import Form from "./Form"

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

    // console.log(data !== "")
    // console.log(data)
    // console.log(data?.city_name)
    // console.log(data?.app_temp)
    // console.log(data?.uv)
    // console.log(data?.weather.description)
    // if (data) { console.log(JSON.stringify(data.city_name)) }
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
            setData(data?.data[0]);
            setCountry(data?.data[0].country_code);
            setSunset(data?.data[0].sunset);
            setState(data?.data[0].state_code)
            setLoading(false);
        }

        // fetchWeather()
    }, [form])

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
                        submit={submit} />
                    <div className="">
                        <table className="table sm:table-md mt-5">
                            <thead className="bg-neutral text-white text-center" >
                                <tr>
                                    <th>State 🗿</th>
                                    <th>Station⌛</th>
                                    <th>Feels like Temperature🔥</th>
                                    <th>Elevation Angle💨</th>
                                    <th>Weather🌌</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data ?
                                    <tr className="text-center">
                                        <td>{state}</td>
                                        <td>{data?.station}</td>
                                        <td>{data?.app_temp}
                                            {units === "M" && <> Celsius</>}
                                            {units === "I" && <> Fahrenheit</>}
                                            {units === "S" && <> Kelvin</>}
                                        </td>
                                        <td>{data?.elev_angle}</td>
                                        <td>{data?.weather.description}</td>
                                    </tr> : <tr className="text-center">
                                        <td>Fill</td>
                                        <td>In {units} unit</td>
                                        <td>Data </td>
                                        <td>Above</td>
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