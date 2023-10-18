/* eslint-disable react/prop-types */

/** Form Component to search city and set Temperature Unit
 * @param {function} search - function to search city
 * @param {string} setUnits - state to set Temperature Unit
 * @param {string} laoding  - state to set loading
 * @param {string} submit - function to submit form
 * @param {string} selectedRadio - state to set selected radio button
 * @param {string} setSelectedRadio - state to set selected radio button
 * @param {string} endDate - state to set end date
 * @param {string} searchDate - function to search date
 */
const Form = (
    { search,
        setUnits,
        loading,
        submit,
        selectedRadio,
        setSelectedRadio,
        endDate,
        searchDate,
    }
) => {
    return (
        <>
            <form>
                <div className="form-control flex flex-row justify-center mb-2">
                    <span className="label-text">Daily Data</span>
                    <input
                        type="radio"
                        name="radio-1"
                        className="radio ml-3 mr-2"
                        checked={selectedRadio === 'Daily'}
                        value="Daily"
                        onChange={() => setSelectedRadio('Daily')}
                    />
                    <span className="label-text ">Weekly Data</span>
                    <input
                        type="radio"
                        name="radio-1"
                        className="radio ml-3 mr-1"
                        checked={selectedRadio === 'Weekly'}
                        value="Weekly"
                        onChange={() => setSelectedRadio('Weekly')}
                    />
                </div>
                {selectedRadio === 'Daily' &&
                    <>
                        <input
                            type="text"
                            placeholder="Enter City..."
                            className="input input-bordered input-sm sm:input-md sm:w-full sm:max-w-xs sm:mr-2"
                            onChange={(e) => search(e)} />
                        <select
                            className="select select-bordered select-xs sm:select-md max-w-xs sm:mr-2"
                            onChange={(e) => setUnits(e.target.value)}>
                            <option value="DEFAULT" disabled selected>What Unit Temperature?</option>
                            <option value="M">Metric</option>
                            <option value="S">Scientific</option>
                            <option value="I">Fahrenheit</option>
                        </select>
                    </>
                }
                {selectedRadio === 'Weekly' &&
                    <>
                        <input
                            type="text"
                            placeholder="Enter City..."
                            className="input input-bordered input-sm sm:input-md  sm:max-w-xs sm:mr-2"
                            onChange={(e) => search(e)} />
                        <input
                            type="text"
                            placeholder="Start Date yyyy-mm-dd"
                            className="input input-bordered input-sm sm:input-md sm:max-w-xs sm:mr-2"
                            onChange={(e) => searchDate(e)} />
                        <input
                            type="text"
                            placeholder="End Date yyyy-mm-dd"
                            value={endDate}
                            disabled
                            className="input input-bordered input-sm sm:input-md sm:max-w-xs sm:mr-2"
                        />
                        <select
                            className="select select-bordered select-xs sm:select-md max-w-xs sm:mr-2"
                            onChange={(e) => setUnits(e.target.value)}>
                            <option value="DEFAULT" disabled selected>What Unit Temperature?</option>
                            <option value="M">Metric</option>
                            <option value="S">Scientific</option>
                            <option value="I">Fahrenheit</option>
                        </select>
                    </>
                }
                {loading ?
                    <p
                        className="sm:ml-6 loading loading-xs sm:loading-md loading-spinner text-info"
                    >
                    </p> :
                    <button
                        className="btn btn-xs sm:btn-md text-white" onClick={submit}
                    >Search...</button>}
            </form>
        </>
    )
}

export default Form