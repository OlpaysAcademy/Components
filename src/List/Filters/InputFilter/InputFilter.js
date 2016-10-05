// @flow
import React from 'react'
import { FormGroup, ControlLabel, FormControl } from '../../../Form'

type InputFilterProps = {
    label: string,
    [prop: string]: any,
}

const InputFilter = ({ label, ...other }: InputFilterProps) => {
    return (
        <FormGroup
            controlId="formBasicText"
            >
            <ControlLabel>{label}</ControlLabel>
            <FormControl
                placeholder={label}
                {...other}
                type='text' />
        </FormGroup>
    )
}

export default InputFilter;