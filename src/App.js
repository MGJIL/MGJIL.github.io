import Pot from './image/svg/PotRez.svg';
import PipesRight from './image/svg/piperight.svg';
import PipesLeft from './image/svg/pipeleft.svg';
import GameJam from './image/svg/Gamejam.svg';

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
        <div class="pot"><img id="svg-image" src={Pot} alt="Pot"/></div>
        <div class="piperight"><img id="svg-image" src={PipesRight} alt="Pot"/></div>
        <div class="pipeleft"><img id="svg-image" src={PipesLeft} alt="Pot"/></div>
        <div class="gamejam"><img id="svg-image" src={GameJam} alt="Pot"/></div>

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
            <div id="gamejamDivTxt">
              <h3>GameJam</h3>
              <p>Qu'est-ce que le Lorem Ipsum?
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
              </p>
            </div>
          </div>
          <div id="CommentParticiperDiv">
            <h3>GameJam</h3>
            <p>Qu'est-ce que le Lorem Ipsum?
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            </p>

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
class Conclusion extends  {
  render() {
    return (
      <React.Fragment>
        <h1>Hello </h1>
      </React.Fragment>
    );
  }
}*/


export default function App() {
  return (
    <div className="App">
        <Welcome/>
        <WhatIs/>
        <Menu />

    </div>
  );
}
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