
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import News from './Components/News';

export default class App extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <News />

      </div>
    )
  }
}
