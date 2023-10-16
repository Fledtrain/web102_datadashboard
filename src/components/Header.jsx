import Nav from "./Nav"

// Header - the top part of the website containing the title and logo
// Parent of Nav
const Header = () => {
    return (
        <>
            <section className="sm:hero-overlay">
                <h1 className="sm:hero hero-content">WeatherReport 🤓</h1>
                <Nav />
            </section>
        </>
    )
}

export default Header