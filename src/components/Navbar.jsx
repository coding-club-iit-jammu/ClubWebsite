import React from 'react'
import clubLogo from '../assets/clubLogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{position:'fixed',width:'100vw',zIndex:'100'}}>
        <header className="text-gray-100 body-font bg-black">
   <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
   <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='ff'>
      <img src={clubLogo} alt="clubLogo" style={{height:'50px',width:'60px'}}/>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/">
      <a href="dd" className="mr-5 hover:text-gray-400" style={{fontStyle:'normal',fontWeight:'600'}}>Home</a></Link>
      <a href="dd" className="mr-5 hover:text-gray-400" style={{fontStyle:'normal',fontWeight:'600'}}>Events</a>
      <a href="dd" className="mr-5 hover:text-gray-400" style={{fontStyle:'normal',fontWeight:'600'}}>About</a>
      <Link to="/contact">
      <a href="dd" className="mr-5 hover:text-gray-400" style={{fontStyle:'normal',fontWeight:'600'}}>Contact</a></Link>
    </nav>
  </div>
</header>
    </div>
  )
}
