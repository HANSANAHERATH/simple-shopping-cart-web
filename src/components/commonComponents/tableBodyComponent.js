import React, { Component } from "react";

const tableBodyComponent = (props) => {
    let array = props && props.dataArray.length > 0 ? props.dataArray : []
    let tableData = array.map((item, i) => {
        return (
            <tr key={i}>
                <td>{item.productCode}</td>
                <td>{item.productName}</td>
                <td>{item.productDescription}</td>
                <td>{item.curency}</td>
                <td>{item.isActive}</td>
                <td>{item.numOfCartons}</td>
                <td>{item.unitsPerCarton}</td>
                <td>{item.singleCartonPrice}</td>
                <td>{item.margineForSingleUnit}</td>
                <td>{item.minNumOfCartons}</td>
                <td>{item.discount}</td>
            </tr>
        )
    })
    return (
        <tbody>{tableData}</tbody>
    );
}

export default tableBodyComponent;