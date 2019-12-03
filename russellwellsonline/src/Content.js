import React, { Component } from 'react';
import Sidebar from './Sidebar.js';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Sidebar />
        {this.props.display}
      </div>
    );
  }
}

export default Content;
