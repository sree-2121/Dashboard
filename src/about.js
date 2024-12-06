import React from "react"
import "./App.css"
import img from "./images/img.jpg"

function About(){
    return(
        <>
        <div className="last">
        <div className="image">
            <img src={img}></img>
        </div>

        <div className="last2">
            <h1>This icon set has it all. It's been the perfect<br></br>
            accompaniment to our productivity app brand.</h1>

            <h3>John Johnson</h3>
            <p>designer</p>
        </div>

        </div>
        
        </>
    )
}

export default About