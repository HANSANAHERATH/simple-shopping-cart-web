import React, { Component } from 'react';
import Product from './product';
import { Row, Col } from 'react-bootstrap';
import CheckOutCartMain from './CheckOutCartMain';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      cartArray: []
    }
  }

  addToCart = (obj) => {
    let cartArray = [...this.state.cartArray]
    cartArray.push(obj)
    this.setState({
      cartArray: cartArray
    })
  }

  render() {
    const [...products] = this.props.products
    return (
      <div>
        <Row>
          <Col lg={9}>
            <ul>
              {products.map(product => (
                <li key={product.id}>
                  <Product {...product}
                    addToCart={this.addToCart}
                    image={"https://lh3.googleusercontent.com/proxy/qc7rb2hxLrlrVyyOaTWHU60lJZPab-xuxDgFP9XtSGA-VVjaWs-C_FtfHJWDd-BzT-om62O5otLztim5MxGalgFJ"} />
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3}>
            <div className="cart-box">
              <CheckOutCartMain
                {...this.state} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


export default ProductList;