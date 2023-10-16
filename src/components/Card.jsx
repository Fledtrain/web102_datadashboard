/* eslint-disable react/prop-types */

/** Card component - a box container that hold pieces of information
 * @component
 * @param {String} children - Text to be displayed in the card
 * @param {String} city - City name
 * @param {String} country - Country abbreviation
 * @param {String} sunset - Sunset time
 */
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