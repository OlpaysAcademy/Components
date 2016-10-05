// @flow
import React, { Component } from 'react';

import { ControlLabel, FormGroup, DatePicker } from '../../../Form'


type DateFilterProps = {
    label: string,
    [prop: string]: any
}

class DateFilter extends Component {
    props: DateFilterProps;

    render() {
        const { label, ...other } = this.props

        return (
            <FormGroup>
                <ControlLabel>{label}</ControlLabel>
                <DatePicker
                    placeholderText={label} 
                    {...other}/>
            </FormGroup>
        );
    }
}

export default DateFilter;