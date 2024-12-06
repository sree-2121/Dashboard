import React from "react";
import "./App.js"

function Cards(props){
    return(
        <>
        <div className="cardcontent">
        <p>Free</p>
        <h1>{props.cost}</h1>
        <p>Best for freelancers, single designers, indie <br></br>developers or solopreneurs.</p>
        
        <p>✔️ Single User</p>
        
        <p>✔️ Personal Project</p>
        
        <p>✔️ Social media accounts</p>
        
        <p>{props.line}</p>
        <button>Get Started</button>
        </div>

        </>
    )
}

export default Cards