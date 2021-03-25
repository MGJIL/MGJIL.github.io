import './App.css';
import React from "react";
import Welcome from './components/Welcome/Welcome';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render(){
    return (
      <div className="App" id="Page">
        <Index/>
    </div>
    )
  }
}
class Index extends React.Component{
  render() {
    return (
      <div className="Index">
        <Welcome/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Footer/>
      </div>
    );
  }
}
export default App;
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
