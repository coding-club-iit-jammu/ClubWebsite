import React from 'react'
import '../css/homeTop.css'
import starBG from '../assets/stars.jpg'

export default function homeTop() {
  return (
    <div class="overflow-hidden" style={{height:'800px',backgroundImage:`url(${starBG})`,boxShadow:'0px 20px 20px 12px'}}>
        <div className="home-main-heading">
            <h1 className="main-title">Coding Club</h1>
        </div>
    </div>
  )
}
