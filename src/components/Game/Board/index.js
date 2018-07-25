import React from "react";

import Box from "../Box";
import Flex from '../../Flex';

const Board = () => (
    <Flex>
      <div className="board-row">
        <div><Box onClick={this.handleClick} /></div>
        <div><Box onClick={this.handleClick} /></div>
        <div><Box onClick={this.handleClick} /></div>
      </div>
        <div className="board-row">
        <div><Box onClick={this.handleClick} value="1" /></div>
        <div><Box color onClick={this.handleClick} value="2"/></div>
        <div><Box onClick={this.handleClick} /></div>
      </div>
        <div className="board-row">
        <div><Box onClick={this.handleClick} /></div>
        <div><Box onClick={this.handleClick} /></div>
        <div><Box onClick={this.handleClick} /></div>
      </div>
    </Flex>
  );

export default Board;
