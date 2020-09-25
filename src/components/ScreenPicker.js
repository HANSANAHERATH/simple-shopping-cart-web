import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScreenPickerComponent from './ScreenPickerComponent'

class ScreenPicker extends Component {

  constructor(props) {
    super(props);
    let url = new URL(window.location.href)
    this.state = {
      screen: url.searchParams.get("screen"),
    }
  }

  render() {
    return (
      <ScreenPickerComponent
        screen={this.state.screen}
        />
    );
  }
}

export default ScreenPicker;