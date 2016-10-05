// @flow
import React, { Component } from 'react';

import { LabeledInput, DatePicker } from '../../../Form'


type DateFilterProps = {
    label: string,
    [prop: string]: any
}

class DateFilter extends Component {
    props: DateFilterProps;

    render() {
        const { label, ...other } = this.props

        return (
            <LabeledInput label={label} >
                <DatePicker
                    placeholderText={label}
                    {...other}/>
            </LabeledInput >
        );
    }
}

export default DateFilter;