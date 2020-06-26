import React from 'react'
import './Main.css';
import Button from '../components/Button';
import Post from '../components/Post';

import avatar from '../img/avatar.png';
import man from '../img/man.jpg';
import star from '../img/star.png';
import gif from '../img/gif.png';
import statistics from '../img/statistics.png';
import photo from '../img/photo.png';
import smiley from '../img/smile.png';
import flower from '../img/flower.jpg';
import lake from '../img/lake.jpg';
import mountainView from '../img/mountain-view.jpg';


function Header(props) {
    return (
    <div className="main-outer">
        <div className="homeHeading">
            <h2>Home</h2>
            <img src={star} alt="star"/>
        </div> 
        <div className="whatsHappening">
            <div className="whatsHappening-top">
                <img src={flower} alt="flower"/>
                <p>What's happening.....</p>
            </div>
            <div className="whatsHappening-bottom">
                <div className="icons">
                    <a href="/"><img src={gif} alt="stuff"/></a>
                    <a href="/"><img src={statistics} alt="stuff"/></a>
                    <a href="/"><img src={photo} alt="stuff" /></a>
                    <a href="/"><img src={smiley} alt="stuff"/></a>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
        <Post avatar={man} author={"Matt"} at={" @Sketch_Comedy_Fan"} timeLapse={"3m"} content={"Bacon ipsum dolor amet pork spare ribs rump porchetta pig."} hashTag={"#stunningView"} tweetImg={lake}/> 
        <Post avatar={avatar} author={"Laura"} at={" @world_traveller"} timeLapse={"1hr"} content={"Bacon ipsum dolor amet tail flank swine, meatball ham hock ham prosciutto cow beef ribs leberkas porchetta. Sausage pork belly shankle t-bone."} hashTag={"#TravelWithMe #DreamBig"} tweetImg={mountainView}/>
    </div>/* End Main wrapper */   
     
    )
}

export default Header


// If props.tweetimg is true or false