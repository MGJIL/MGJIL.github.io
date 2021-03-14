import Pot from './image/svg/PotRez.svg';
import PipesRight from './image/svg/piperight.svg';
import PipesLeft from './image/svg/pipeleft.svg';
import GameJam from './image/svg/Gamejam.svg';

import './App.css';
import React from 'react';
/*
class Menu extends React.Component {
  render() {
    return (
      https://github.com/simple-icons/simple-icons/tree/develop/icons
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      
        <div id="change-menu">
          <div className="menu-sup"></div>
          <div className="menu-mid"></div>
          <div className="menu-inf"></div>
        </div>
        
      );
  }
}*/
class WelcomeClasse extends React.Component {
  render() {
    return (
      
      <div className="Welcome">
        <div className="pot"><img className="svg-image" src={Pot} alt="Pot"/></div>
        <div className="piperight"><img className="svg-image" src={PipesRight} alt="Pot"/></div>
        <div className="pipeleft"><img className="svg-image" src={PipesLeft} alt="Pot"/></div>
        <div className="gamejam"><img className="svg-image" src={GameJam} alt="Pot"/></div>

      </div>
    );
  }
}

class WhatIs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="WhatIs">
          <h2 className="SectionTitle">C'est quoi? </h2>
            <div id='WhatIsWithoutTitle'>
              <div className='item'>


              </div>
              <div className='item'>


              </div>
              <div className='item'>


              </div>
              <div className='item'>

                
              </div>
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
        <WelcomeClasse/>
        <WhatIs/>

    </div>
  );
}
/*
        <Menu />

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