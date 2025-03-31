import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Sectors from './pages/Sectors';
import Careers from './pages/Careers';
import Overview from './pages/Overview';
import Footer from './components/Footer';
import Environmental from './pages/Environmental';
import Social from './pages/Social';
import Governance from './pages/Governance';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Sectors' element={<Sectors/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Overview' element={<Overview/>}/>
        <Route path='/Environmental' element={<Environmental/>}/>
        <Route path='/Social' element={<Social/>}/>
        <Route path='/Governance' element={<Governance/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;