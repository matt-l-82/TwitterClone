import React from 'react';
import './Nav.css';
import Button from './Button';

import tweeter from '../img/tweeter.png';
import tweeterHome from '../img/tweeterHome.jpeg';
import profile from '../img/profile.png';
import tweeterBell from '../img/tweeterBell.png';
import tweeterBookmark from '../img/tweeterBookmark.png';
import tweeterEnvelope from '../img/tweeterEnvelope.png'
import tweeterHash from '../img/tweeterHash.jpg'
import tweeterMore from '../img/tweeterMore.png'
import tweeterList from '../img/tweeterList.png'



function Nav() {
    return (
        <div className="navContainer">
            <div className="tweeter">
                <img src={tweeter} alt="tweeter-logo" width='35px' />
            </div>
            <ul>
                <li className="active"> <img className="icon" src={tweeterHome} alt="home" width='25px' /> Home</li>
                <li> <img className="icon" src={tweeterHash} alt="explore" width='25px' /> Explore</li>
                <li><img className="icon" src={tweeterBell} alt="notification" width='20px' /> Notifications</li>
                <li> <img className="icon" src={tweeterEnvelope} alt="message" width='25px' /> Messages</li>
                <li> <img className="icon" src={tweeterBookmark} alt="bookmarks" width='25px' /> Bookmarks</li>
                <li> <img className="icon" src={tweeterList} alt="lizt" width='25px' /> Lists</li>
                <li> <img className="icon" src={profile} alt="profile" width='25px' /> Profile</li>
                <li> <img className="icon" src={tweeterMore} alt="more" width='25px' /> More</li>
            </ul>

            <Button />

        </div>
    );
}

export default Nav
