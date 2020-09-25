import React, { Component } from "react";
import { Row, Col, Form, Table } from "react-bootstrap";

const inputComponent = (props) => {
    let inputElement = null;
    if (props.type === 'checkbox') {
        inputElement = <Form.Check
            type="checkbox"
            disabled={props.disabled}
            label={props.label}
            onChange={props.changed}
            checked={props.value}
        />
    } else if (props.type === 'radio') {
        let options = props.options.length > 0 && props.options.map((item, i) => {
            return (
            <div style={{ display: "inline-flex" }} key={i}>
                <Col >
                    <Form.Check 
                        inline={true} type="radio" 
                        disabled={item.disabled} 
                        name={props.id} 
                        id={item.id} 
                        value={item.id} 
                        label={item.label} 
                        onChange={item.changed} 
                        checked={props.checked} />
                </Col>
            </div>
            )
        }, this);
        inputElement = options;
    } else if (props.type === 'text' || props.type === 'number') {
        inputElement = <Form.Control 
            type={props.type} 
            name={props.name} 
            id={props.id} 
            name={props.name} 
            className="no-validation" 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
        />
    }

    return (
        <div>
            {inputElement}
        </div>
    );
}

export default inputComponent; 