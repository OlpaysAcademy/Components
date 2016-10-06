// @flow
import React from 'react';
import classNames from 'classnames'
import { Pagination as BootstrapPagination } from 'react-bootstrap';

import type { ClassNamesParams } from '../../types';

import './Pagination.css';

type PaginationProps = {
    className?: ClassNamesParams,
    [prop: string]: any,
}

const Pagination = (props: PaginationProps) => {
    const { className, ...other } = props;
    return (
        <BootstrapPagination
            className={classNames('Pagination', className)}
            bsSize="medium"
            {...other} />
    )
}

export default Pagination