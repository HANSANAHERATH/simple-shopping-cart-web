import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

class CheckOutCartMain extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const cartArray = this.props.cartArray
        let totalItem = 0
        let subTotal = 0
        let delivaryCharge = 0
        let discount = 0
        let grandTotal = 0

        cartArray.forEach(element => {
            totalItem += element.itemCount
            subTotal += element.totalPrice
            discount += discount
        });

        grandTotal = subTotal - discount
        return (
            <div>
                <h2>Order Summery</h2>
                <Row>
                    <Col>Item Count</Col>
                    <Col>{totalItem}</Col>
                </Row>
                <Row>
                    <Col>Sub Total</Col>
                    <Col>{subTotal}</Col>

                </Row>
                <Row>
                    <Col>Delivary Carge</Col>
                    <Col>{delivaryCharge}</Col>

                </Row>
                <Row>
                    <Col>Discount</Col>
                    <Col>{discount}</Col>

                </Row>
                <Row>
                    <Col>Total</Col>
                    <Col>{grandTotal}</Col>

                </Row>
                <Row>
                    <Button>Checkout</Button>
                </Row>
                <Row><div>Empty Cart</div></Row>

            </div>
        )
    }
}

export default CheckOutCartMain;