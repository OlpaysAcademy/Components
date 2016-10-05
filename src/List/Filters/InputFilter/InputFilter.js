// @flow
import React from 'react'
import { LabeledInput, FormControl } from '../../../Form'

type InputFilterProps = {
    label: string,
    [prop: string]: any,
}

const InputFilter = ({ label, ...other }: InputFilterProps) => {
    return (
        <LabeledInput label={label}>
            <FormControl
                placeholder={label}
                {...other}
                type='text' />
        </LabeledInput>
    )
}

export default InputFilter;