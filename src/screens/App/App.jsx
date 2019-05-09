import React, { Component } from 'react';
import PublicLayout from './screens/PublicLayout/PublicLayout'
import { createGlobalStyle } from 'styled-components'
import { systemFont } from './screens/shared/style/fontDefinitions'

const GlobalStyle = createGlobalStyle`
  ${systemFont}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
	text-decoration: none;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: system-ui;
	color: #777;
    line-height: 1.5;
  }
  input:-webkit-autofill,
  input[type="password"]:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }
  h1 {
	  color: black
  }
  `
  
class App extends Component {
  render() {
    return (
      <div className="App">
	  	<GlobalStyle/>
		<PublicLayout/>
      </div>
    );
  }
}

export default App;
