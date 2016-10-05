// @flow
import React from 'react'
import classNames from 'classnames'
import { Button as BootstrapButton } from 'react-bootstrap'

import type { ClassNamesParams } from '../types';

import './Button.css'

type ButtonProps = {
    className?: ClassNamesParams,
    secondary?: boolean,
    [prop: string]: string,
}

const Button = (props: ButtonProps) => {
    const { className, secondary, ...other } = props;
    return (
        <BootstrapButton
            className={classNames({ 'btn-secondary': secondary }, className) }
            {...other}>
        </BootstrapButton>
    )
}

export default Button;