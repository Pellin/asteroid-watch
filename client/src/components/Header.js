import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="header-link">
              <h1 className="header-title">ASTEROID WATCH</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;