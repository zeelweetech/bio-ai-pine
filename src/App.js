import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Faq from './components/faq/Faq';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/Product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
