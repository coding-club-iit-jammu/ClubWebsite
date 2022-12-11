import React from 'react'
import '../css/homeTop.css'
import starBG from '../assets/stars.jpg'

export default function homeTop() {
  return (
    <div class="overflow-hidden" style={{height:'800px',backgroundImage:`url(${starBG})`}}>
        <div className="home-main-heading">
            <h2 className="main-title">Coding Club IIT-Jammu</h2>
        </div>
    </div>
  )
}
