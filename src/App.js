import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Careers from './pages/Careers';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Sectors' element={<Sectors/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/Sustainability' element={<Sustainability/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App;