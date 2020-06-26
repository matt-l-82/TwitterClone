import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

import './App.css';



class App extends React.Component {
  render() {

    return (
      <React.Fragment>
        
        <div className="container">
            <Nav />
            <Main />
        <div className="sidebar-main-container">
            <Sidebar sidebarTitle={"What's happening"} sidebarSubject={"Politics"} sidebarTime={"1 hour ago"} sidebarCopy={"Matt Hancock says the government has the power to close beaches in England"} />
            
        </div>    
            
       </div>  
            
         
          
    
      </React.Fragment>
    )

  }


}

export default App