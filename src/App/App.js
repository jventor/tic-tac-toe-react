import React, { Component } from "react";
import logo from "./logo.png";
import Game from "../components/Game";
import Template from "../layout/Template";
import { injectGlobal } from "styled-components";
import { normalize } from "polished";

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

class App extends Component {
  render() {
    return (

        <Template
          title="Tic Tac Toe"
          logo={logo}
          author="Jaime Ventor"
          year="2018"
        >
          <Game />
        </Template>

    );
  }
}

export default App;
