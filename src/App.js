import './App.css';
import Home from './pages/home.jsx';  
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import About from './pages/about';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/team" element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
