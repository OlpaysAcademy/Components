// @flow
import React from 'react'
import classNames from 'classnames'
import { Button as BootstrapButton } from 'react-bootstrap'

import type { ClassNamesParams } from '../types' 

import './Button.css'

type ButtonProps = {
    bsStyle?: string,
    className?: ClassNamesParams,
    outline?: boolean,
    [prop: string]: string,
}

const Button = (props: ButtonProps) => {
    const { bsStyle, className, outline, ...other } = props;
    const style = bsStyle || 'default'
    return (
        <BootstrapButton
            {...other}
            bsStyle={bsStyle}
            className={ classNames(className, { [`btn-${style}-outline`]: outline }) }
            >
        </BootstrapButton>
    )
}

export default Button;