// @flow
import React from 'react';
import classNames from 'classnames'

import './ListItem.css';

type ListItemProps = {
    children?: React$Element<{}>,
    className?: string,
}

const ListItem = ({children, className}: ListItemProps) => {
    return (
        <div className={classNames('ListItem', className)}>
            {children}
        </div>
    )
}

export default ListItem