import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/Topmenu/TopMenu';
import Header from './Component/Header/Header';
import Portfolio from './Component/Content/Portfolio';
import About from './Component/Content/About';
import Contact from './Component/Content/Contact';
import Footer from './Component/Footer/Footer';
import Scroll from './Component/Scroll/Scroll';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <Portfolio title="huydaica"/>
        <About title="aaa"/>
        <About title="bbb"/>
        <Contact/>
        <Footer/>
        <Scroll/>
      </div>
    );
  }
}

export default App;
