import './App.css';
import Nav from './components/navbar/Nav';
import logo from "./assets/logo.png"
import Service from './components/Services/Service';
import Simg from './components/Serviceimg/Simg';

function App() {
  return (
    <>
    <Nav image={logo}/>
    <Service/>
    <Simg/>
    </>
  );
}

export default App;
