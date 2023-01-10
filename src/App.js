import './App.css';
import Home from './pages/home.jsx';  
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import About from './pages/about';
import { Routes, Route} from "react-router-dom";
import Footer from './components/Footer'
import Event from './pages/event';

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ClubWebsite" element={<Home/>} />
      <Route path="/ClubWebsite/event" element={<Event/>}/>
      <Route path="/ClubWebsite/contact" element={<Contact/>}/>
      <Route path="/ClubWebsite/team" element={<About/>}/>
      {/* <Route path="/events" element={<Events/>}/> */}
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
