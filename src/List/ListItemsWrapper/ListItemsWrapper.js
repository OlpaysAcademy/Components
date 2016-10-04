// @flow
import _ from 'lodash';
import React from 'react';
import classNames from 'classnames'
import { Glyphicon } from 'react-bootstrap'
import LoadingListItem from '../LoadingListItem';

import type { ClassNamesParams } from '../../types';

import './ListItemsWrapper.css';

type ListItemsWrapperProps = {
    children?: React$Element<{}>,
    className?: ClassNamesParams,
    emptyMessage: string,
    emptyIcon?: string,
    itemsCount?: number,
    loading: boolean,
    times?: number,
}

const ListItemsWrapper = ({
    children,
    className,
    emptyIcon,
    emptyMessage,
    itemsCount = 0,
    loading,
    times = 1,
}: ListItemsWrapperProps) => {
    const joinedClassName = classNames('ListItemsWrapper', className);
    const renderLoaded = () => {
        if (itemsCount === 0) {
            return (
                <div className='ListItemsWrapper-empty-container'>
                    <div className='ListItemsWrapper-empty'>
                        {emptyIcon && 
                            <div className='ListItemsWrapper-empty-icon'>
                                <Glyphicon glyph={emptyIcon}  />
                            </div>
                        }
                        {emptyMessage}
                    </div>
                </div>
            )
        }

        return (
            <div className={joinedClassName} >
                {children}
            </div>
        )
    }
    const renderLoading = () => (
        <div className={joinedClassName} >
            { _.range(times).map((i) => <LoadingListItem key={i} />) }
        </div>
    )

    return loading
        ? renderLoading()
        : renderLoaded();
}

export default ListItemsWrapper