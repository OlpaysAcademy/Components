// @flow
import React from 'react';

import './LabeledInput.css'

import { FormGroup, ControlLabel } from '../'

type LabeledInputProps = {
    children?: React$Element<{}>,
    [prop: string]: any
}

const LabeledInput = ({children, label, ...other}: LabeledInputProps) => {
    return (
        <FormGroup {...other}>
                <ControlLabel>{label}</ControlLabel>
                {children}
        </FormGroup>
    )
}

export default LabeledInput