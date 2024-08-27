import React from "react";
import './personal.css';
import personal1 from'../assets/photo_2024-08-26_02-49-24.jpg';


export const PersonInfo=()=>{
    return(
        <div className="personal-info">
            <h1>Пятніченко Дмитрій</h1>
            <p><strong>Телефон:</strong>0681492152</p>
            <p><strong>Email:</strong>dimapyatnichenko09@gmail.com</p>
            <p><strong>Місце проживання:</strong>Одеса</p>
            <p><strong>Навички:</strong>React,JavaScript,CSS,HTML</p>
            <img src={personal1} alt="Моє фото" className="personal-photo"/>
        </div>
    )
}

export default PersonInfo;