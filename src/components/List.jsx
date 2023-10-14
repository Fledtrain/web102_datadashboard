import { useState } from "react"
import Card from "./Card"

// List - a box container that stores a continuous group of information
const List = () => {

    const [form, setForm] = useState("")

    const search = (e) => {
        e.preventDefault()
        setForm(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return (
        <>
            <section className="Temp">
                <section className='flex p-4'>
                    <div className='flex space-x-4'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="">
                    <form>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered w-full max-w-xs mr-2"
                            onChange={(e) => search(e)} />
                        <button
                            className="btn "
                            onClick={submit}>Search</button>
                    </form>
                    <div>{form}</div>
                </section>
            </section >
        </>
    )
}

export default List