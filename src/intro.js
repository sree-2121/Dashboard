import React from "react";
import "./App.css"

function Intro(){
    return(
        <>
        <div className="intro">
        <button className="tag1">Pricing</button>
        <h1>Simple, Straightforward Pricing.</h1>
        <p>Choose the plan that's right for your brand. Whether you're just getting started with email marketing or<br></br>
        you're personalizing every campaign, there's a plan for you.</p>
        
        <div className="introbtn">
            <button className="tag2">Monthly</button>
            <button>Yearly</button>
        </div>
        </div>
        
        </>
    )
}

export default Intro