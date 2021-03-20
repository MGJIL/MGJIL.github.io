import './App.css';
import React from 'react';
import Welcome from './components/Welcome/Welcome';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aide from './Aide';
import Unknown from './Unknown';

export default function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/" exact component={() => <Index/>} />
        <Route path="/GameJamInterlycee/" exact component={() => <Index/>} />
        <Route path="/index" exact component={() => <Index/>} />
        <Route path="/GameJamInterlycee/index" exact component={() => <Index/>} />
        <Route path="/index.html" exact component={() => <Index/>} />
        <Route path="/GameJamInterlycee/index.html" exact component={() => <Index/>} />
        <Route path="/help" exact component={() => <Aide/>} />
        <Route path="/GameJamInterlycee/help" exact component={() => <Aide/>} />
        <Route path="/*" exact component={() => <Unknown/>} />
      </Switch>
    </Router>
  </div>
  );
}
class Index extends React.Component{
  render() {
    return (
      <div className="Index">
        <Welcome/>
        <Page1/>
        <Page2/>
        <Footer/>
      </div>
    );
  }
}
/*
    <div className="App">
    <React.Fragment>
        <Welcome/>
        <Page1/>
        <Page2/>
        <Footer/>
    </div>




*/
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
