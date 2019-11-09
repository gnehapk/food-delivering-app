import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.scss';

const Header: React.FC<HeaderProps> = (props) => (
  <div className="header">
    <div>
      <p className="location-text">Location</p>
      <p className="location-name">{props.location}</p>
    </div>
    <div className="btn-container">
      <Button variant="light" className="location-btn">Change Location</Button>
    </div>
  </div>
);

type HeaderProps = {
  location: string;
};

export default Header;