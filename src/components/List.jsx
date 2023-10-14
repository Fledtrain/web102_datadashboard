import Card from "./Card"

// List - a box container that stores a continuous group of information
const List = () => {
    return (
        <>
            <section className="bg-red-900">
                <section className='flex p-4'>
                    <div className='flex space-x-4'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
                <div>List</div>
            </section>
        </>
    )
}

export default List