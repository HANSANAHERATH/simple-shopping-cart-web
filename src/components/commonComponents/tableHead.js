import React, { Component } from "react";

const tableHead = (props) => {
    let array = props && props.dataArray.length > 0 ? props.dataArray : []
    let tableData = array.map((item, i) => {
        return (
            <th key={i}>{item}</th>
        )
    })
    return (
        <tr>{tableData}</tr>
    );
}

export default tableHead;