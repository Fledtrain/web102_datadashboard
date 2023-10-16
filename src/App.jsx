import './App.css'
import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <>
      <div className='block sm:flex'>
        <section className='flex ml-[64px] sm:p-4 '>
          <Header />
        </section>
        <section className='sm:flex sm:p-4 '>
          <List />
        </section>
      </div>
    </>
  )
}

export default App
