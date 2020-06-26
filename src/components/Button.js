import React from 'react'
import './Button.css';

const Button = (props) => (
    <button className="btn"><a href="/">{props.children}Tweet</a></button>
);

export default Button;
