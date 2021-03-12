import Pot from './image/PotRez.svg';
import PipesRight from './image/piperight.svg';
import PipesLeft from './image/pipeleft.svg';
import GameJam from './image/Gamejam.svg';
import './App.css';
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div class="Menu">
        <img class="pot" src={Pot} alt="Pot"/>
        <img class="piperight" src={PipesRight} alt="Pot"/>
        <img class="pipeleft" src={PipesLeft} alt="Pot"/>
        <div class="gamejamdiv" ><img class="gamejam" src={GameJam} alt="Pot"/></div>
      </div>
    );
  }
}
class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

class WhatIs extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

class WhoAre extends React.Component {
  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}/*

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
        <Menu/>
        <Welcome/>
        <WhatIs/>
        <WhoAre/>

    </div>
  );
}

export default App;

/*

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