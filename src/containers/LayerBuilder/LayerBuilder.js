import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Clothes from "../../components/Clothes/Clothes";

class LayerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Clothes />
        <div> Clothes Controls</div>
      </Aux>
    );
  }
}

export default LayerBuilder;
