
// Card - a box containers that hold pieces of information
const Card = ({ children, city, country, sunset }) => {
    return (
        <>
            {/* <section className="flex flex-col p-5 hero-overlay card-body">
                <h1 className="card-title">Card ex</h1>
                <p className="text-center">Temp</p>
            </section> */}
            <section className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center">
                    <h2 className="card-title">{children}</h2>
                    <p>{city}{country}{sunset}</p>
                </div>
            </section>
        </>
    )
}

export default Card