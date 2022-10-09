import React, { Component } from 'react';

import Navbar from './Navbar';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout;
