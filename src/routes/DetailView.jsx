import Header from "../components/Header"
import WeatherDetail from "../components/WeatherDetail"


const DetailView = () => {
    return (
        <>
            <div className='block lg:flex'>
                <section className='flex sm:ml-0 sm:p-4 '>
                    <Header />
                </section>
                <section className="className='sm:flex sm:p-4 '">
                    <WeatherDetail />
                </section>
            </div>
        </>
    )
}

export default DetailView