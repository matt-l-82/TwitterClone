import './Post.css';
import speech from '../img/comment.png';
import arrows from '../img/recycle.png';
import heart from '../img/heart.png';
import upload from '../img/upload.png';
import React from 'react'

export default function Post(props) {
     
    // let tweetImg = 'false';

    // if(tweetImg) {
    
    // } else {
        
    // } 

    return (
        <div className="post-container">
            <div className="post-tn">
                <img src={props.avatar} alt="Avatar"/>
            </div>
            <div>
                <div className="post-content">
                <h4 className="author">{props.author}</h4><h4 className="author-at">{props.at}</h4><h4 className="timeLapse">{props.timeLapse}</h4>
                <p className="post-content">{props.content}</p><h4 className="hashTag">{props.hashTag}</h4>
                    <a href="/"><img className="post-image" src={props.tweetImg} alt="#"/></a>
                    <div className="post-icons">
                        <a href="/"><img src={speech} alt="stuff"/></a>
                        <a href="/"><img src={arrows} alt="stuff"/></a>
                        <a href="/"><img src={heart} alt="stuff"/></a>
                        <a href="/"><img src={upload} alt="stuff"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

