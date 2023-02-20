import React from "react";
import './index.css';

export const Header = () => {
    return(
        <div className='header'>
            <div  className='leftSide'>
                <div>
                    <img src='https://logos-world.net/wp-content/uploads/2022/07/EasyJet-Logo.png' alt='easyJet' class='logo'/>
                </div>
                <div className='linksLeft'>
                    <h1 className='link'>Flight info</h1>
                    <h1 className='link'>Holidays</h1>
                    <h1 className='link'>Cars/Transfers</h1>
                    <h1 className='link'>Business</h1>
                    <h1 className='link'>Booking.com</h1>
                    <h1 className='link'>Covid-19 Travel  Hub</h1>
                    <h1 className='link'>Manage Bookings</h1>
                </div>
            </div>
            <div className='rightSide'>
                <div className='linksRight'>
                    <h1 className='link'>Check  In</h1>
                    <h1 className='link'>Sign In</h1>
                    <h1 className='link'>Help</h1>
                </div>
                <div className='location'>
                    <img src='https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg' alt='uk' class='uk'/>
                </div>
            </div>
        </div>
    );
};