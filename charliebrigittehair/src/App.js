import React, { Component } from 'react';
import logo from './logoMain.png';
import './App.css';

class App extends Component {
    render() {
        return ( <div className = "App" >
            <header className = "App-header"> 
                <img src = { logo } className = "App-logo" alt = "logo" />
                {/* <h1 className = "App-title"> CHARLIE BRIGITTE HAIR
               </h1> */} 
            </header>
            <p className = "App-intro" >
            </p>  
            </div>
        );
    }
}

export default App;