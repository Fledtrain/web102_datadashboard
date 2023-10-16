/* eslint-disable react/prop-types */
const Form = ({ search, setUnits, loading, submit }) => {
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Enter City..."
                    className="input input-bordered input-sm sm:input-md sm:w-full sm:max-w-xs  sm:mr-2"
                    onChange={(e) => search(e)} />
                <select
                    className="select select-bordered select-xs sm:select-md sm:w-full max-w-xs sm:mr-2"
                    onChange={(e) => setUnits(e.target.value)}>
                    <option value="DEFAULT" disabled selected>What Unit Temperature?</option>
                    <option value="M">Metric</option>
                    <option value="S">Scientific</option>
                    <option value="I">Fahrenheit</option>
                </select>
                {loading ?
                    <p
                        className="sm:ml-6 loading loading-xs sm:loading-md loading-spinner text-info"
                    >
                    </p> :
                    <button
                        className="btn btn-xs sm:btn-md" onClick={submit}
                    >Search...</button>}
            </form>

        </>
    )
}

export default Form