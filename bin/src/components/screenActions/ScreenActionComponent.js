import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { Row, Col, Form } from "react-bootstrap";
import InputComponent from "../commonComponents/InputComponent";

class ScreenActionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "create",
      firstLoad: true,
      show: true
    };
  }

/*   componentWillReceiveProps(nextProps) {
    //if(this.state.firstLoad){
    this.setState({ action: nextProps.action })
    //}    
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      firstLoad: false
    });
    this.props.handleChange(e)
  } */

  render() {
    return (
      <div>
        <div className="section-title act-main tool">
          <div className="act-title">
            <h6><i className="fas fa-filter"></i>Select the Option</h6>
          </div>
        </div>
        <div className="section-body select-option-main">
        <ToastContainer />

      <div className="section-body">
          <Form>
            {/* <Form.Group as={Row} controlId="action"> */}
          
             
            
            {/* </Form.Group> */}
          </Form>
        </div>
      </div>
      </div>
    );
  }
}

export default ScreenActionComponent;
