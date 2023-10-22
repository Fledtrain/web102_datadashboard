import { Link } from "react-router-dom"

// NavBar - a list of choices to navigate on the page
const Nav = () => {
    return (
        <>
            <section className="sm:flex sm:justify-around lg:block">
                <Link to="/">
                    <button className="btn btn-ghost btn-wide flex sm:ml-2 md:ml-0">🛖Dashboard</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-ghost btn-wide flex">🔍Search</button>
                </Link>
                <Link to="/about">
                    <button className="btn btn-ghost btn-wide flex">🆘About</button>
                </Link>
            </section>
        </>
    )
}

export default Nav