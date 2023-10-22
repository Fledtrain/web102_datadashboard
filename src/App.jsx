import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import DetailView from './routes/DetailView'
import About from './routes/About'
import NotFound from './routes/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="weather/:city/:date" element={<DetailView />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
