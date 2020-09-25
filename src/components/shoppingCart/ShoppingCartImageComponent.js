import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ShoppingCartImageComponent extends Component {
    render() {
        const {image} = this.props;
        return (
            <div>
                <img src={image} alt="product" />
            </div>
        )
    }
}


export default ShoppingCartImageComponent;