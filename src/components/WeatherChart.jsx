/* eslint-disable react/prop-types */
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';


/** Component for the weather chart
 * @param {Array} weeklyData - data from the API call 
 * @returns a chart with the weather data
 */
const WeatherChart = ({ weeklyData }) => {
    const [toggle, setToggle] = useState(false)

    const data = weeklyData.data.map((item, index) => ({
        name: item.datetime,
        temp: item.temp, // Assuming your data object has a "temp" property
        clouds: item.clouds,     // Assuming your data object has a "uv" property
    }));

    return (
        <>
            <button className='btn btn-xs sm:btn-md text-white' onClick={() => setToggle(!toggle)}>Swap Charts</button>
            <section className=''>
                {toggle === true ?
                    <>
                        <p className='hero pb-2 pt-2 '>Line Weather Chart</p>
                        <div className='hero'>
                            <LineChart width={730} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                                <Line type="monotone" dataKey="clouds" stroke="#82ca9d" />
                            </LineChart>
                        </div>
                    </>
                    :
                    <>
                        <p className='hero pb-2 pt-2 '>Bar Weather Chart</p>
                        <div className='hero'>
                            <BarChart width={730} height={250} data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="temp" fill="#8884d8" />
                                <Bar dataKey="clouds" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </>
                }
            </section>
        </>
    )
}

export default WeatherChart