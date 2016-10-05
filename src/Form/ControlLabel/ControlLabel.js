// @flow
import React from 'react';
import classNames from 'classnames'
import { ControlLabel as BootstrapControlLabel } from 'react-bootstrap'

import type { ClassNamesParams } from '../../types';

import './ControlLabel.css'

type ControlLabelProps = {
    classNames?: ClassNamesParams,
    children?: React$Element<{}>,
    [prop: string]: any
}

const ControlLabel = (props: ControlLabelProps) => {
    const { children, className, ...other } = props;
    const classes = classNames(className, 'ControlLabel')
    return (
        <BootstrapControlLabel
            {...other}
            className={classes} >
            {children}
        </BootstrapControlLabel>
    )
}

export default ControlLabel