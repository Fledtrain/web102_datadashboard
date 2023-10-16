
// NavBar - a list of choices to navigate on the page
const Nav = () => {
    return (
        <>
            <section className="sm:flex sm:justify-around lg:block">
                <button className="btn btn-ghost btn-wide flex sm:ml-2 md:ml-0">🛖Dashboard</button>
                <button className="btn btn-ghost btn-wide flex">🔍Search</button>
                <button className="btn btn-ghost btn-wide flex">🆘About</button>
            </section>
        </>
    )
}

export default Nav