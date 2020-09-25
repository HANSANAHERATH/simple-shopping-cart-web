import React, { Component } from "react";
import SetupNewProduct from "./setupProducts/SetupNewProduct";
import SetupNewProductMainComponent from "./setupProducts/SetupNewProductMainComponent";

class ScreenPickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: this.props.screen,
    };
    this.ShowView = this.ShowView.bind(this);
  }

  ShowView = view => {
    switch (view) {
      case "setupNewProduct":
        return <SetupNewProductMainComponent/>
      default:
        return "PAGE NOT FOUND"
    }
  };


  render() {
    let view = this.state.screen;
    return <div className="main-container">{this.ShowView(view)}
    </div>;
  }
}

export default ScreenPickerComponent;
