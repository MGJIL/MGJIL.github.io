import Pot from './image/PotRez.svg';
import PipesRight from './image/piperight.svg';
import PipesLeft from './image/pipeleft.svg';
import GameJam from './image/Gamejam.svg';

import './App.css';
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      /*https://github.com/simple-icons/simple-icons/tree/develop/icons*/
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      /*
        <div id="change-menu">
          <div class="menu-sup"></div>
          <div class="menu-mid"></div>
          <div class="menu-inf"></div>
        </div>
        */
      );
  }
}
class Welcome extends React.Component {
  render() {
    return (
      
      <div class="Welcome">
        
        <img class="pot" src={Pot} alt="Pot"/>
        <img class="piperight" src={PipesRight} alt="Pot"/>
        <img class="pipeleft" src={PipesLeft} alt="Pot"/>
        <img class="gamejam" src={GameJam} alt="Pot"/>

      </div>
    );
  }
}

class WhatIs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="WhatIs">
          <h2>C'est quoi? </h2>
          <div id="gamejamDiv">
            <h3>GameJam</h3>
          
          </div>
          <div id="CommentParticiperDiv">
            <h3>GameJam</h3>
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}
/*
class WhoAre extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

class WhatDo extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}
class Conclusion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello </h1>
      </React.Fragment>
    );
  }
}*/


function App() {
  return (
    <div className="App">
        <Welcome/>
        <WhatIs/>
        <Menu />

    </div>
  );
}

export default App;

/*
        <WhatIs/>
        <WhoAre/>

        <WhatDo/>
        <Conclusion/>
*/
/*<!--
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>-->*/