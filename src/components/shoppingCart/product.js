import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import SingleProductPopUp from './SingleProductPopUp';
import ShoppingCartImageComponent from './ShoppingCartImageComponent';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        }
    }
  
    setModalShow = () => {
        this.setState({
            modalShow: true
        })
    }

    setModalHide = () => {
        this.setState({
            modalShow: false
        })
    }

    render() {
        const { productName , singleUnitPrice, curency,image } = this.props;

        return (
            <div className="product_thumb">
                <div className="caption">
                    <ShoppingCartImageComponent
                        image={image} />
                    <div className="product-details">
                        <div variant="primary" onClick={this.setModalShow}>{productName}</div>
                        <div className="product__price">{singleUnitPrice} {curency}</div>
                        <SingleProductPopUp
                            show={this.state.modalShow}
                            setModalHide={this.setModalHide}
                            addToCart={this.props.addToCart}
                            {...this.props}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;