import React from 'react';
import logo from '../../assets/logo.png';
import './header.scss';

const Header = () => (
  <header className="header-container">
    <div className="container-logo">
      <img className="logo" src={logo} alt="movie" />
    </div>
    <h1 className="logo-name">Movie WatchList</h1>
  </header>

);

export default Header;
