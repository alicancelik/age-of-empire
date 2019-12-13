import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Units from './pages/Units';
import UnitDetail from './pages/UnitDetail';
import './global/style.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [
          {
            title: 'Home',
            key: 'home',
            link: '/',
          },
          {
            title: 'Units',
            key: 'units',
            link: '/units',
          },
        ]
    };
  }

    
  renderMenuItems() {
    const { routes } = this.state;
    return routes.map(route => {
      return (
        <Link to={route.link} className="link-container" key={route.key}>
            <span className="menu-item">{route.title}</span>
        </Link>
      );
    });
  }

renderRoutes() {
  return (
    <div className="page-container">
      <Switch>
        <Route path="/units">
          <Units />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/unit_detail">
          <UnitDetail />
        </Route>
      </Switch>
    </div>
  );
}
  
  render() {
    return (
      <Router>
        <div className="layout">
          <div className="nav-menu">
            <div className="menu-items">
              {this.renderMenuItems()}
            </div>
          </div>
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }
}

