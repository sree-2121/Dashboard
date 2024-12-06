import React from 'react'
import './App.css';

function Navigation(){
    return(
        <>
        <div className='navbar'>
        <span>123Done</span>
        <div className='links'>
            <list>
                <ol>Features</ol>
                <ol>Gallery</ol>
                <ol>Testimonials</ol>
                <ol>Pricing</ol>                 
            </list>
        </div>
        <div className='navbtns'>
            <button>Log in</button>
            <button className='gs'>Get Started</button>
        </div>
        </div>
        </>
    )
}

export default Navigation