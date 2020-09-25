import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, Row, Modal } from "react-bootstrap";
import ShoppingCartImageComponent from './ShoppingCartImageComponent';
import ShoppingCartDetailsComponent from './ShoppingCartDetailsComponent';
import { GetTotalPriceAction, resetFetchingTotalPrice } from '../../redux/actions/GetTotalPriceAction';
import { connect } from 'react-redux';

class SingleProductPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      itemCount: 1,
      id: this.props.id,
      singleUnitPrice: this.props.singleUnitPrice,
      total: this.props.fetchTotalPrice && this.props.fetchTotalPrice.fetchTotalPrice && this.props.fetchTotalPrice.fetchTotalPrice >= 0 ? this.props.fetchTotalPrice.fetchTotalPrice : this.props.singleUnitPrice
    };
  }

  setModalHide = () => {
    //this.props.onHide()
  }

  GetTotalPriceAction = (val, id) => {
    this.setState({
      itemCount: val,
      id: id
    })
    this.props.GetTotalPriceAction(val, id)
  }

  addToCart = () => {
    let obj = {
      "id": this.state.id,
      "itemCount": this.state.itemCount,
      "totalPrice": this.state.singleUnitPrice * this.state.itemCount,
      "discount":  (this.state.singleUnitPrice * this.state.itemCount) - this.state.total
    }
    this.props.addToCart(obj)
  }

  clearCart = () => {

  }

  render() {
    const { productDescription, image } = this.props
    return (

      <Modal
        show={this.props.show}
        //onHide={this.props.setModalHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Your Item To Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={4}><ShoppingCartImageComponent
              image={image}
            />
            </Col>
            <Col lg={8}>
              <ShoppingCartDetailsComponent
                singleUnitPrice={this.props.singleUnitPrice}
                total={this.props.fetchTotalPrice && this.props.fetchTotalPrice.fetchTotalPrice && this.props.fetchTotalPrice.fetchTotalPrice >= 0 ? this.props.fetchTotalPrice.fetchTotalPrice : this.props.singleUnitPrice}
                id={this.props.id}
                GetTotalPriceAction={this.GetTotalPriceAction}
                name={this.props.productName}
                code={this.props.productCode}
                curency={this.props.curency}
              />
              <Row><Col>
                <p>{productDescription}</p>
              </Col>
              </Row>
              <Row>
                <Col><Button onClick={this.addToCart}>Add To Cart</Button></Col>
                <Col><Button onClick={this.clearCart}>Clear Cart</Button></Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.setModalHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

  }
}

const mapDipatchToProps = dispatch => {
  return {
    GetTotalPriceAction: (val, id) => {
      dispatch(GetTotalPriceAction(val, id));
    },
    resetGetTotalPriceList: () => {
      dispatch(resetFetchingTotalPrice());
    }
  }
}

const mapStateToProps = state => {
  return {
    fetchTotalPrice: state.fetchTotalPrice
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(SingleProductPopUp);
