// @flow
import React from 'react';
import classNames from 'classnames'
import { FormControl as BootstrapFormControl } from 'react-bootstrap'

import type { ClassNamesParams } from '../../types';

import './FormControl.css'

type FormControlProps = {
    onlyBottom?: boolean,
    classNames?: ClassNamesParams,
    [prop: string]: any
}

const FormControl = (props: FormControlProps) => {
    const { onlyBottom, className, ...other } = props;
    const classes = classNames(className, 'FormControl', { 'FormControl-bottom-border': onlyBottom })
    return (
        <BootstrapFormControl 
            {...other}
            className={classes} /> 
    )
}

export default FormControl