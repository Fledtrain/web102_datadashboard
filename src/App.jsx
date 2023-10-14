import './App.css'
import Card from './components/Card'

import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <>
      <div className='flex'>
        <section className='flex p-4 '>
          <Header />
        </section>
        <section className='flex p-4 '>
          <List />
        </section>
        
      </div>
    </>
  )
}

export default App
