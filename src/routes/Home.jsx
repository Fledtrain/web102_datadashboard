import Header from '../components/Header'
import List from '../components/List'

const Home = () => {
    return (
        <>
            <div className='block lg:flex'>
                <section className='flex sm:ml-0 sm:p-4 '>
                    <Header />
                </section>
                <section className='sm:flex sm:p-4 '>
                    <List />
                </section>
            </div>
        </>
    )
}

export default Home