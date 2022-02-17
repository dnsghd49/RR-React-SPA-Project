import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navitem from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import MusicLib from './pages/MusicLib';
import MoleAim from './pages/MoleAim';
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navitem />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/e-gallery" element={<Gallery />} />
          <Route path="/moleaim" element={<MoleAim />} />
          <Route path="/musiclib" element={<MusicLib />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
