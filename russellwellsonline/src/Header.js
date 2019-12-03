import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">Russell Wells</div>
        <div className="Menu">
          <IndexLink to='/' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>About</IndexLink>
          <Link to='/portfolio' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>Portfolio</Link>
          <Link to='/more' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>More</Link>
          <Link to='/resume' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>Resume</Link>
        </div>
      </div>
    );
  }
}

export default Header;
