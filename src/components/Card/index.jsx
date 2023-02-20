import React from "react";
import './index.css';

export const Card = (props) => {
    return (
        <div className='holidayInfo'>
            <div className='card'>
                <img  src={props.data.img} alt='holiday' class='holiday'/>
            </div>
            <div className='details'>
                <h1 class='destination'>{props.data.destination}</h1>
                <p class='price'>{props.data.price}</p>
            </div>
        </div>
    );
};