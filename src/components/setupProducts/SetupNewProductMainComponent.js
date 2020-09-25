import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, Form, Table } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import InputComponent from "../commonComponents/InputComponent";
import SetupNewProduct from "./SetupNewProduct";
import { saveFormDataAction } from "../../redux/actions/saveFormDataAction"
import TableHead from "../commonComponents/tableHead";
import TableBodyComponent from "../commonComponents/tableBodyComponent";

class SetupNewProductMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [
                {
                    "standardInfo": [
                        { "label": "Product Code", "type": "text", "id": "productCode", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Product Name", "type": "text", "id": "productName", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Product Description", "type": "text", "id": "productDescription", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Is Active", "type": "radio", "id": "isActive", "placeholder": "", "value": "yes", "validation": [], "options": [{ "label": "Yes", "id": "yes" }, { "label": "No", "id": "no" }] }
                    ]
                },
                {
                    "productPrice": [
                        { "label": "Number Of Available Cartons", "type": "number", "id": "numOfCartons", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Units Per Cartons", "type": "number", "id": "unitsPerCarton", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Single Carton Price", "type": "number", "id": "singleCartonPrice", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Profit Margine For Single Corton", "type": "number", "id": "margineForSingleUnit", "placeholder": "", "value": "", "validation": ["isEmpty"] }
                    ]
                },
                {
                    "productDiscounts": [
                        { "label": "Number Of Cartons Should Buy", "type": "number", "id": "minNumOfCartons", "placeholder": "", "value": "", "validation": ["isEmpty"] },
                        { "label": "Discount For Carton (%)", "type": "number", "id": "discount", "placeholder": "", "value": "", "validation": ["isEmpty"] }
                    ]
                }
            ],
            tableHead: ["Code", "Name", "Description", "Currency", "Is Active", "Number Of Cartons", "Units Per Cartons", "Single Carton Price", "Margine For Single Unit", "Minimum Number Of Cartons", "Discount"],
            gridArray: [],
            glabaleData: {},
            initialForm: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("*****staet",state,props)
        if (props.productList && props.productList.length > 0 && props.productList != state.gridArray) {
            return {
                gridArray: props.productList
            }
        }
    }

    addDataToGrid = () => {
        let gridArray = [...this.state.gridArray]
        let form = [...this.state.form]
        let arrayKey = ["standardInfo", "productPrice", "productDiscounts"]
        let globalValidation = true
        let savingObj = { "id": null, "singleUnitPrice": null, "curency": "USD" }
        arrayKey.forEach((keyName, j) => {
            form.forEach((ele, i) => {
                if (ele.hasOwnProperty(keyName)) {
                    let isValidate = this.dataValidation(ele[keyName])
                    if (isValidate == false) {
                        globalValidation = false
                    } else if (isValidate) {
                        let array = ele[keyName]
                        array.forEach(element => {
                            savingObj[element.id] = element.value
                        });
                    }
                }
            })
        })

        if (globalValidation) {
            gridArray.push(savingObj)
            this.setState({
                gridArray: gridArray,
            })
            this.resetForm()
        }
    }

    resetForm = () => {
        let form = [...this.state.form]
        let arrayKey = ["standardInfo", "productPrice", "productDiscounts"]
        arrayKey.forEach(element => {
            form.forEach(ele => {
                if (ele.hasOwnProperty(element)) {
                    ele[element].forEach(obj => {
                        obj.value = ""
                    });
                }
            });
        });
        this.setState({
            form: form
        })
    }

    dataValidation = (array) => {
        let isGlobalValidation = true
        array.forEach(element => {
            let isValidated = true;
            element.validation.forEach(validation => {
                if (validation === "isEmpty") {
                    if (element.value == null || element.value == "") {
                        isValidated = false
                    }
                }
            })

            if (isValidated == false) {
                isGlobalValidation = false
            }
        });
        return isGlobalValidation;
    }

    updateState = (obj, key) => {
        this.setState({
            [key]: obj[key]
        })
    }

    save = () => {
        let gridArray = [...this.state.gridArray]
        this.props.saveFormData(gridArray)
    }

    render() {
        let form = [...this.state.form]
        let standardInfo = form[0].standardInfo
        let productPrice = form[1].productPrice
        let productDiscounts = form[2].productDiscounts
        return (
            <div className="product-details-container section">
                <div className="section-title">Standard Info</div>
                <SetupNewProduct
                    data={standardInfo}
                    name={{ "key": "standardInfo" }}
                    addDataToRedux={this.updateState}
                />
                <SetupNewProduct
                    data={productPrice}
                    name={{ "key": "productPrice" }}
                    addDataToRedux={this.updateState}
                />
                <SetupNewProduct
                    data={productDiscounts}
                    name={{ "key": "productDiscounts" }}
                    addDataToRedux={this.updateState}
                />
                <div><button type="button" className="controller-btn btn btn-primary btn-sm" onClick={() => { this.addDataToGrid() }}><i className="fas fa-save"></i>Add</button></div>
                <Table striped bordered hover className="assign-combination-table">
                    <thead>
                        <TableHead
                            dataArray={[...this.state.tableHead]}
                        />
                    </thead>
                    <TableBodyComponent
                        dataArray={[...this.state.gridArray]}
                    />
                </Table>
                <div className="modal-footer"><button type="button" className="controller-btn btn btn-primary btn-sm" onClick={() => { this.save() }}><i className="fas fa-save"></i>Save</button></div>
            </div>
        );
    }
}

const mapDipatchToProps = dispatch => {
    return {
        saveFormData: (array) => {
            dispatch(saveFormDataAction(array));
        }
    }
}

const mapStateToProps = state => {
    return {
        glabaleData: state.glabaleData,
        savedSetupProducts: state.savedSetupProducts
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(SetupNewProductMainComponent);