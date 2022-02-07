import React from 'react'
import { Form } from 'react-bootstrap';

const FormInput = ({ label, type, name, disabled = false, value, placeholder, isError, isTouched, onChange, onBlur }) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type} name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            />
            {isError && isTouched && isError}
        </Form.Group>
    )
}

export default FormInput;
