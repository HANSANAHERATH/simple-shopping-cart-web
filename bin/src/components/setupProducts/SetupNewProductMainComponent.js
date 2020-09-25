import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, Form } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import ScreenActionComponent from "../screenActions/ScreenActionComponent";
import InputComponent from "../commonComponents/InputComponent";
import SetupNewProduct from "./SetupNewProduct";
import { FormDataAction } from "../../redux/actions/FormDataAction";

class SetupNewProductMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [
                {
                    "standardInfo": [
                        { "label": "Product Code", "type": "text", "id": "productcode", "placeholder": "", "value": "", "onchange": this.onChangeFunc },
                        { "label": "Product Name", "type": "text", "id": "productname", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Product Category", "type": "text", "id": "productcategory", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Currency", "type": "text", "id": "curency", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Is Active", "type": "radio", "id": "isactive", "placeholder": "", "value": "yes", "onchange": "", "options": [{ "label": "Yes", "id": "yes" }, { "label": "No", "id": "no" }] }
                    ]
                },
                {
                    "productPrice": [
                        { "label": "Number Of Cartons", "type": "number", "id": "numofcartons", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Units Per Cartons", "type": "number", "id": "unitspercarton", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Single Carton Price", "type": "number", "id": "singlecartonprice", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Margine For Single Unit", "type": "number", "id": "margineforsingleunit", "placeholder": "", "value": "", "onchange": "" }
                    ]
                },
                {
                    "productDiscounts": [
                        { "label": "Minimum Number Of Cartons", "type": "number", "id": "minnumofcartons", "placeholder": "", "value": "", "onchange": "" },
                        { "label": "Discount", "type": "number", "id": "discount", "placeholder": "", "value": "", "onchange": "" }
                    ]
                }
            ]
        }
    }
    render() {
        let form = [...this.state.form]
        let standardInfo = form[0].standardInfo
        let productPrice = form[1].productPrice
        let productDiscounts = form[2].productDiscounts
        return (
            <div>
                <SetupNewProduct
                    data={standardInfo}
                    key={"standardInfo"}
                    addDataToRedux={this.props.addDataToRedux}
                />
                <SetupNewProduct
                    data={productPrice}
                    key={"productPrice"}
                    addDataToRedux={this.props.addDataToRedux}
                />
                <SetupNewProduct
                    data={productDiscounts}
                    key={"productDiscounts"}
                    addDataToRedux={this.props.addDataToRedux}
                />
                <div className="modal-footer"><button type="button" className="controller-btn btn btn-primary btn-sm" onClick={() => { this.save() }}><i className="fas fa-save"></i>Save</button></div>

            </div>
        );
    }
}

const mapDipatchToProps = dispatch => {
    return {
        addDataToRedux: (obj) => {
            dispatch(FormDataAction(obj));
        }
    }
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(SetupNewProductMainComponent);