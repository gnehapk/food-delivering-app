import React from 'react';
import logo from '../../assets/logo-horizontal.svg';
import username from  '../../assets/user-icon.svg';

import './NavBar.scss';

const NavBar: React.FC = () => (
    <div className="nav-bar">
        <img alt="logo" src={logo} />
        <div className="user-section">
          <img alt="username" src={username} />
          <span className="username">Jane Smith</span>
        </div>
    </div>
);

export default NavBar;