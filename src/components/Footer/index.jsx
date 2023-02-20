import React from "react";
import './index.css';

export const Footer = () => {
    return(
        <div className='footer'>
            <div className='leftSideFooter'>
                <h1 className='contactTitle'>Connect with us</h1>
                <div className='contact'>
                    <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Responsive/easyJet/social-media-icons/DL4337-Social-media-icons-30x30px-email.png?h=30&la=en&w=30&hash=91E1C6273876F81A479143845F12BC13CF8A5B2A' alt='email' class='email'/>
                    <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Responsive/easyJet/social-media-icons/DL4337-Social-media-icons-30x30px-Facebook.png?h=30&la=en&w=30&hash=915D2C658824EAC47CB5B2E9525DFE84E12B157F' alt='fb' class='fb'/>
                    <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Responsive/easyJet/social-media-icons/DL4337-Social-media-icons-30x30px-Twitter.png?h=30&la=en&w=30&hash=965D79675526CE290103FE7B315944405E7AD345' alt='twitter' class='twitter'/>
                    <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Responsive/easyJet/social-media-icons/DL4337-Social-media-icons-30x30px-YouTube.png?h=30&la=en&w=30&hash=0502CF9ADF214E9D42D89C82F96422D3E95B08F6' alt='yt' class='yt'/>
                    <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Responsive/easyJet/social-media-icons/DL4337-Social-media-icons-30x30px-In.png?h=30&la=en&w=30&hash=AB660019D59DEAC93425FC28DAD3DAD41F953DA2' alt='in' class='in'/>
                    <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Responsive/easyJet/social-media-icons/DL4337-Social-media-icons-30x30px-Instragram.png?h=30&la=en&w=30&hash=BFCDDD3B7A00012A7D8138977657A2F90B7282B7' alt='ig' class='ig'/>
                </div>            
            </div>
            <div className='rightSideFooter'>
                <h1 className='unicefTitle'>Our Change for Good partnership with</h1>
                <img src='https://www.easyjet.com/ejcms/cache/medialibrary/Images/Content/UNICEF/2016/smalllogo.png?h=45&la=en&w=150&hash=091B15C5EF56DE03D92BF92E6A3A909CACFF44C7' alt='unicef' class='unicef'/>
            </div>
        </div>
    )
}