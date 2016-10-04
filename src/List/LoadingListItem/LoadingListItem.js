// @flow
import React from 'react';
import classNames from 'classnames'

import './LoadingListItem.css';

type LoadingListItemProps = {
    children?: React$Element<{}>,
    className?: string,
}

const LoadingListItem = ({children, className}: LoadingListItemProps) => {
    return (
        <div className={classNames('LoadingListItem', className) }>
            <div className='LoadingListItem-wrapper'>
                <div className='LoadingListItem-animated-background' >
                    <div className="background-masker content-top"></div>
                    <div className="background-masker content-first-end"></div>
                    <div className="background-masker content-second-line"></div>
                    <div className="background-masker content-second-end"></div>
                    <div className="background-masker content-third-line"></div>
                    <div className="background-masker content-third-end"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingListItem