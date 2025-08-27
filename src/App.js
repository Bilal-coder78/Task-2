import './App.css';
import Nav from './components/navbar/Nav';
import logo from "./assets/logo.png"
import Service from './components/Services/Service';
import Simg from './components/Serviceimg/Simg';
import About from './components/About/About';
import Testimonial from './components/testimonial/Testimonial';
import Testi from './components/testi/Testi';
import Partner from './components/partners/Partner';
import Footer from './components/Footer/Footer';
import {Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
          <Nav image={logo} />
        <Service />
        <Simg />
        <About />
        <Testimonial />
        <Testi />
        <Partner />
        <Footer />
        </>
        }/>
        </Routes>
    </>
  );
}

export default App;
