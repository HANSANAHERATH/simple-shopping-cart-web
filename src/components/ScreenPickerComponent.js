import React, { Component } from "react";
import { connect } from 'react-redux';
import SetupNewProductMainComponent from "./setupProducts/SetupNewProductMainComponent";
import ProductList from "./shoppingCart/productList";
import { GetProductListAction } from "../redux/actions/GetProductListAction";
import { GetAllProductsListAction } from "../redux/actions/GetAllProductsListAction";

class ScreenPickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: this.props.screen,
      data : [
        {
            "id": 1,
            "productCode": "ewr",
            "productName": "rwe",
            "curency": "rwe",
            "isActive": "yes",
            "numOfCartons": 23,
            "unitsPerCarton": 32,
            "singleCartonPrice": 32,
            "margineForSingleUnit": 32,
            "minNumOfCartons": 32,
            "discount": 32,
            "singleUnitPrice": null,
            "productCategory": "rwe"
        },
        {
            "id": 2,
            "productCode": "cvxvxc",
            "productName": "cx",
            "curency": "vcx",
            "isActive": "",
            "numOfCartons": 32,
            "unitsPerCarton": 324,
            "singleCartonPrice": 423,
            "margineForSingleUnit": 423,
            "minNumOfCartons": 423,
            "discount": 234,
            "singleUnitPrice": null,
            "productCategory": "vxc"
        },
        {
            "id": 3,
            "productCode": "ewr",
            "productName": "rwe",
            "curency": "rwe",
            "isActive": "yes",
            "numOfCartons": 23,
            "unitsPerCarton": 32,
            "singleCartonPrice": 32,
            "margineForSingleUnit": 32,
            "minNumOfCartons": 32,
            "discount": 32,
            "singleUnitPrice": null,
            "productCategory": "rwe"
        },
        {
            "id": 4,
            "productCode": "cvxvxc",
            "productName": "cx",
            "curency": "vcx",
            "isActive": "",
            "numOfCartons": 32,
            "unitsPerCarton": 324,
            "singleCartonPrice": 423,
            "margineForSingleUnit": 423,
            "minNumOfCartons": 423,
            "discount": 234,
            "singleUnitPrice": null,
            "productCategory": "vxc"
        },
        {
            "id": 5,
            "productCode": "ewr",
            "productName": "rwe",
            "curency": "rwe",
            "isActive": "yes",
            "numOfCartons": 23,
            "unitsPerCarton": 32,
            "singleCartonPrice": 32,
            "margineForSingleUnit": 32,
            "minNumOfCartons": 32,
            "discount": 32,
            "singleUnitPrice": 32,
            "productCategory": "rwe"
        },
        {
            "id": 6,
            "productCode": "cvxvxc",
            "productName": "cx",
            "curency": "vcx",
            "isActive": "",
            "numOfCartons": 32,
            "unitsPerCarton": 324,
            "singleCartonPrice": 423,
            "margineForSingleUnit": 423,
            "minNumOfCartons": 423,
            "discount": 234,
            "singleUnitPrice": 552.25,
            "productCategory": "vxc"
        },
        {
            "id": 7,
            "productCode": "ewr",
            "productName": "rwe",
            "curency": "rwe",
            "isActive": "yes",
            "numOfCartons": 23,
            "unitsPerCarton": 32,
            "singleCartonPrice": 32,
            "margineForSingleUnit": 32,
            "minNumOfCartons": 32,
            "discount": 32,
            "singleUnitPrice": 32,
            "productCategory": "rwe"
        },
        {
            "id": 8,
            "productCode": "cvxvxc",
            "productName": "cx",
            "curency": "vcx",
            "isActive": "",
            "numOfCartons": 32,
            "unitsPerCarton": 324,
            "singleCartonPrice": 423,
            "margineForSingleUnit": 423,
            "minNumOfCartons": 423,
            "discount": 234,
            "singleUnitPrice": 552.25,
            "productCategory": "vxc"
        },
        {
            "id": 9,
            "productCode": "Code1",
            "productName": "New Product",
            "curency": "USD",
            "isActive": "Y",
            "numOfCartons": 32,
            "unitsPerCarton": 20,
            "singleCartonPrice": 500,
            "margineForSingleUnit": 30,
            "minNumOfCartons": 3,
            "discount": 10,
            "singleUnitPrice": 750,
            "productCategory": null
        },
        {
            "id": 10,
            "productCode": "Code1",
            "productName": "New Product",
            "curency": "USD",
            "isActive": "Y",
            "numOfCartons": 32,
            "unitsPerCarton": 20,
            "singleCartonPrice": 1000,
            "margineForSingleUnit": 30,
            "minNumOfCartons": 3,
            "discount": 10,
            "singleUnitPrice": 65,
            "productCategory": null
        },
        {
            "id": 11,
            "productCode": "Code1",
            "productName": "New Product",
            "curency": "USD",
            "isActive": "Y",
            "numOfCartons": 32,
            "unitsPerCarton": 20,
            "singleCartonPrice": 1000,
            "margineForSingleUnit": 30,
            "minNumOfCartons": 3,
            "discount": 10,
            "singleUnitPrice": 65,
            "productCategory": null
        }
    ]
    };
    this.ShowView = this.ShowView.bind(this);
  }

  componentDidMount(){
    this.props.GetProductListAction();
    this.props.GetAllProductsListAction();
  }

  ShowView = view => {
    switch (view) {
      case "setupNewProduct":
        return <SetupNewProductMainComponent
        productList = {this.state.data}
         // productList={this.props.productList && this.props.productList.productList ? this.props.productList.productList : []} 
         />
      case "shoppingPage":
        return <ProductList
        products={this.state.data}
          //products={this.props.fetchProductList && this.props.fetchProductList.fetchProductList ? [...this.props.fetchProductList.fetchProductList] : []}
        />
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

const mapDipatchToProps = dispatch => {
  return {
    GetProductListAction: () => {
      dispatch(GetProductListAction());
    },
    GetAllProductsListAction: () => {
      dispatch(GetAllProductsListAction());
    }
  }
}

const mapStateToProps = state => {
  console.log("---------",state.fetchProductList)
  return {
    fetchProductList: state.fetchProductList,
    productList : state.productList
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(ScreenPickerComponent);
