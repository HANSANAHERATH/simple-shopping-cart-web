import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import InputComponent from '../commonComponents/InputComponent';

class ShoppingCartDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: this.props.total,
            itemCount: 1,
            id: this.props.id
        };
    }

    componentDidMount() {
        this.props.GetTotalPriceAction(1, this.state.id)
    }

    static getDerivedStateFromProps(props, state) {
        if (props.fetchTotalPrice && props.fetchTotalPrice.fetchTotalPrice && props.fetchTotalPrice.fetchTotalPrice && props.fetchTotalPrice.fetchTotalPrice.fetchTotalPrice != state.total) {
            return {
                total: props.fetchTotalPrice.fetchTotalPrice
            }
        } else {
            return {
                total: props.total
            }
        }
    }

    changeItem = (e) => {
        let val = null
        if ("itemCount" == e.target.id && e.target.value > 0) {
            val = e.target.value
            this.props.GetTotalPriceAction(val, this.state.id)
        }
        this.setState({
            itemCount: val,
        })
    }
    render() {
        const { name, code, singleUnitPrice, curency } = this.props
        let total = this.state.total;
        return (
            <Row>
                <Col>
                    <h4>{name}</h4>
                    <p>{code}</p>
                </Col>
                <Col>{singleUnitPrice}{curency}</Col>
                <Col>
                    <InputComponent
                        type={"number"}
                        name={"itemCount"}
                        id={"itemCount"}
                        value={this.state.itemCount}
                        onChange={(e) => this.changeItem(e)} /></Col>
                <Col>{total}{curency}</Col>
            </Row>
        )
    }
}

export default ShoppingCartDetailsComponent;
