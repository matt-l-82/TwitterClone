import React from 'react'
import './Sidebar.css';

export default function sidebar(props) {
    return (
        <div className="sidebar-wrapper">
            <input type="text" placeholder="Search Twitter"></input>
        
                <div className="sidebar-content">
                    <h3>{props.sidebarTitle}</h3>
                    <div className="sidebar-post">
                        <div className="titleTime">
                            <h5>{props.sidebarSubject}</h5>
                            <p>{props.sidebarTime}</p>
                        </div>
                        <div>
                            <h4 className="sidebar-copy">{props.sidebarCopy}</h4>
                        </div>
                    </div>   
                    <div className="sidebar-post">
                        <div className="titleTime">
                            <h5>{props.sidebarSubject}</h5>
                            <p>{props.sidebarTime}</p>
                        </div>
                        <div>
                            <h4 className="sidebar-copy">{props.sidebarCopy}</h4>
                        </div>
                    </div>     
                    <div className="sidebar-post">
                        <div className="titleTime">
                            <h5>{props.sidebarSubject}</h5>
                            <p>{props.sidebarTime}</p>
                        </div>
                        <div>
                            <h4 className="sidebar-copy">{props.sidebarCopy}</h4>
                        </div>
                    </div>     
                    <div className="sidebar-post">
                        <div className="titleTime">
                            <h5>{props.sidebarSubject}</h5>
                            <p>{props.sidebarTime}</p>
                        </div>
                        <div>
                            <h4 className="sidebar-copy">{props.sidebarCopy}</h4>
                        </div>
                    </div>     
                </div>
        </div>
    );
}
