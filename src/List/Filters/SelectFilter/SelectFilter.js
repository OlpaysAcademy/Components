// @flow
import React, { Component } from 'react';
import { Select, LabeledInput } from '../../../Form';

type SelectFilterProps = {
    label: string,
    [prop: string]: any,
}

class SelectFilter extends Component {
    props: SelectFilterProps

    render() {
        const { label, ...other} = this.props;
        return (
            <LabeledInput label={label}>
                <Select
                    placeholder={label}
                    {...other}
                    />
            </LabeledInput>
        );
    }
}

export default SelectFilter;