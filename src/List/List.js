// @flow
import React, { Component } from 'react';

import './List.css';

type ListProps = {
    children?: React$Element<{}>,
}

class List extends Component {
    props: ListProps;

    render () {
        return (
            <div className='List'>
                {this.props.children}
            </div>
        )
    }
}

export default List