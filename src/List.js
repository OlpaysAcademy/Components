// @flow
import React, {Component}  from 'react';
import { List as RTList, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

class List extends Component {
    render() {
        const { title, ...other } = this.props
        return (
            <RTList {...this.props}>
                {this.props.children}
            </RTList>
        );
    }
}

export default List;