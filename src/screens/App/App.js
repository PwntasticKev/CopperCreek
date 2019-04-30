import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../../config/router';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        	{ routes }
      </Router>
      </div>
    );
  }
}

export default App;
