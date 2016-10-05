// @flow
import React from 'react';
import classNames from 'classnames'
import {default as ReactSelect} from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

import type { ClassNamesParams } from '../../types';

import './Select.css'

type ControlLabelProps = {
    classNames?: ClassNamesParams,
    children?: React$Element<{}>,
    [prop: string]: any
}

const ControlLabel = (props: ControlLabelProps) => {
    const { children, className, ...other } = props;
    // The component already has the 'Select' class
    const classes = classNames(className, 'ReactSelect')
    return (
        <ReactSelect
            {...other}
            className={classes} >
            {children}
        </ReactSelect>
    )
}

export default ControlLabel