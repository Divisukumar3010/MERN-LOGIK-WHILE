import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavbarEx } from './components/NavbarEx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
        <NavbarEx />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App 