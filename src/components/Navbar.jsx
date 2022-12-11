import React from 'react'
import clubLogo from '../assets/clubLogo.png'

export default function Navbar() {
  return (
    <div>
        <header className="text-gray-100 body-font bg-black z-10">
   <div className="container mx-auto flex flex-wrap p-2  flex-col md:flex-row items-center">
   <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='ff'>
      <img src={clubLogo} alt="clubLogo" style={{height:'50px',width:'60px'}}/>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="dd" className="mr-5 hover:text-gray-400">Home</a>
      <a href="dd" className="mr-5 hover:text-gray-400">Events</a>
      <a href="dd" className="mr-5 hover:text-gray-400">About</a>
      <a href="dd" className="mr-5 hover:text-gray-4  00">Contact</a>
    </nav>
  </div>
</header>
    </div>
  )
}
