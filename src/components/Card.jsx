/* eslint-disable react/prop-types */

/** Card component - a box container that hold pieces of information
 * @component
 * @param {String} children - Text to be displayed in the card
 * @param {String} city - City name
 * @param {String} country - Country abbreviation
 * @param {String} precip - Precipitation
 */
const Card = ({ children, city, country, precip }) => {
    return (
        <>
            <section
                className="card ml-8 md:ml-0 mt-4 md:mt-0 w-24 md:w-36 lg:w-64 xl:w-80 bg-neutral text-neutral-content">
                <div className="card-body items-center">
                    <h2 className="card-title text-white">{children}</h2>
                    <p>{city}{country}{precip}</p>
                </div>
            </section>
        </>
    )
}

export default Card