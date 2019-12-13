import React, { Component } from 'react';
import './style.scss';
import logo from '../../global/assets/ageOf.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Home Page</h1>
        <img src={logo} className="logo-container" alt="Logo"/>
      </div>
    );
  }
}