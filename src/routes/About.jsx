import Header from "../components/Header"

const About = () => {
    return (
        <>
            <div className='block lg:flex'>
                <section className='flex sm:ml-0 sm:p-4 '>
                    <Header />
                </section>
                <section className='sm:flex sm:p-4 '>
                    <div className="pt-2 text-lg text-ellipsis">
                        <h2 className="text-white">WeatherReporter App utilizes the https://www.weatherbit.io/ API to fetch weather reports throughout the global and display them in a beautiful table.
                        </h2>
                        <h2 className="text-white">
                            Just enter the city you want and the app will fetch the weather report for you. You can filter either by Daily or Weekly Data and You can filter it by city, unit temperature, and start date!
                        </h2>
                    </div>
                </section>
            </div >
        </>
    )
}

export default About