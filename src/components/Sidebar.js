import React from 'react'
import search from '../img/search.png';
import './Sidebar.css';

export default function sidebar(props) {
    return (
        <div className="sidebar-wrapper">
            <input type="text" searchImg={search} placeholder="Search Twitter"></input>

            <div className="sidebar-content">
                <h3>{props.sidebarTitle}</h3>
                <div className="sidebar-post">
                    <h5>{props.sidebarSubject}</h5>
                    <p>{props.sidebarTime}</p>
                </div>
            </div>
        </div>
    )
}
