// @flow
import React, { Component } from 'react';

import { LabeledInput, DatePicker } from '../../../Form'

import './DateRangeFilter.css'

type DateRangeFilterValue = {
    from: moment$Moment,
    to: moment$Moment,
}

type DateRangeFilterProps = {
    datePickerProps?: { [prop: string]: any },
    fromLabel?: string,
    label: string,
    maxDate?: moment$Moment,
    minDate?: moment$Moment,
    onChange?: (dates: DateRangeFilterValue) => any,
    toLabel?: string,
    value?: DateRangeFilterValue
}

class DateRangeFilter extends Component {
    props: DateRangeFilterProps
    
    handleChange: (datePicker:string, date: moment$Moment) => any
    state: DateRangeFilterValue

    constructor(props: DateRangeFilterProps) {
        super(props)
        const { from, to } = props.value || {};
        this.state = { from, to }
    }

    componentWillReceiveProps(newProps: DateRangeFilterProps) {
        if (this.props.value !== newProps.value) {
            const { from, to } = newProps.value || {};
            this.setState({ from, to });
        }
    }

    handleChange(datePicker: string, date: moment$Moment) {
        this.setState({ [datePicker]: date }, () => {
            const { onChange } = this.props;
            if ( !onChange ) {
                return;
            }
            const { from, to } = this.state;
            onChange({ from, to });
        })
    }

    render() {
        const { fromLabel, label, maxDate, minDate, toLabel } = this.props
        return (
            <LabeledInput label={label} >
                <div className='DateRangeFilter-wrapper'>
                    <DatePicker
                        minDate={minDate}
                        onChange={this.handleChange.bind(this, 'from')}
                        placeholderText={fromLabel}
                        selected={this.state.from} />
                    { /* The offset (-110) avoid the widget from leaving the screen */ }
                    <DatePicker
                        onChange={this.handleChange.bind(this, 'to')}
                        placeholderText={toLabel}
                        popoverTargetOffset='10px -110px'
                        selected={this.state.to}
                        maxDate={maxDate}
                        minDate={this.state.from} />
                </div>
            </LabeledInput>
        );
    }
}

export default DateRangeFilter;