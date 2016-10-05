// @flow
import React from 'react';
import classNames from 'classnames'

import './Main.css';

type MainProps = {
    children?: React$Element<{}>,
    padded?: boolean,
}

const Main = ({ padded, children }: MainProps) => (
    <div className='Main'>
        <div className={classNames('Main-container', {'Main-container-padded': padded} )}>
            {children}
        </div>
    </div>
)

Main.defaultProps = {
    padded: true
}

export default Main