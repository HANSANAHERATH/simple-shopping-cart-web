import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import InputComponent from "../commonComponents/InputComponent";
import { FormDataAction } from "../../redux/actions/FormDataAction";

class SetupNewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            key : {}
        }
    }
    componentDidMount() {
        this.setState({
            data: [...this.props.data],
            key : {...this.props.name}
        })
    }

    onChangeFunc = (e) => {
        let data = [...this.state.data]
        let obj = {}
        data.forEach(element => {
            if (element.id === e.target.id) {
                element.value = e.target.value
            }
        });
        this.setState({
            data: data
        })
        //obj["name"]= this.state.key.key
        //obj["value"]=data
        obj[this.state.key.key] = data
        this.props.addDataToRedux(obj,this.state.key.key);
    }

    render() {
        let form = [...this.state.data]
        let data = form.length > 0 && form.map((item, i) => {
            return (
                <div key={i} className="section-body">
                    <Form.Group controlId={item.productcode}>
                        <Row>
                            <Col lg="4" mg="" sm="12"><Form.Label>{item.label}</Form.Label></Col>
                            <Col lg="7" sm="12">
                                <InputComponent
                                    id={item.id}
                                    type={item.type}
                                    name={item.productcode}
                                    placeholder={item.placeholder}
                                    value={item.value}
                                    onChange={(e) => this.onChangeFunc(e)}
                                    options={item.hasOwnProperty("options") ? item.options : null}
                                    checked={item.hasOwnProperty("options") ? (item.value == item.options.id ? true : false) : null}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                </div>
            )
        }, this);

        return (
            <div>
                <Row>
                    <Col lg="6">{data}</Col>
                    <Col lg="6"></Col>
                </Row>
            </div>
        )
    }
}

const mapDipatchToProps = dispatch => {
    return {
       /*  addDataToRedux: (obj) => {
            dispatch(FormDataAction(obj));
        } */
    }
}

export default connect(null, mapDipatchToProps)(SetupNewProduct);