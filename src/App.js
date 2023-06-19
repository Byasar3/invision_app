import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
