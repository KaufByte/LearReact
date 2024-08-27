import React from "react";
import city from"../assets/caption.jpg";
import city1 from"../assets/potemkin-steps.jpg";
import city2 from"../assets/primorsky-boulevard.jpg";
import './city.css';
export const CityInfo= ()=>{
    return(
        <div className="city-info">
            <h1>Odesa</h1>
            <p><storng>Country:</storng>Ukraine</p>
            <p><strong>First mentioned:</strong>1415</p>
            <div className="landmarks">
                <h2>interest landmarks</h2>
                <img
                    src ={city}
                    alt = "Odesa Passage "
                    style={{width:'400px',borderRadius:'20px'}} 
                />
                 <img
                    src ={city1}
                    alt = "Potemkins-steps "
                    style={{width:'400px',borderRadius:'20px'}} 
                />
                  <img
                    src ={city2}
                    alt = "Primorsky boulvard "
                    style={{width:'400px',borderRadius:'20px'}} 
                />
            </div>
        </div>
    )
}
export default CityInfo;