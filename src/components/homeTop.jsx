import React from 'react'
import '../css/homeTop.css'
// import starBG from '../assets/stars.jpg'
import Particle from './Particle'

export default function homeTop() {
  return (
    <div class="overflow-hidden" style={{height:'750px',boxShadow:'0px 0px 10px 12px'}}>
        <Particle/>
        <div className="home-main-heading">
            <span className="main-title">Coding Club-IIT Jammu</span>
        </div>
    </div>
    
  )
}
