import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/Contact' element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
