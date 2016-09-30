// @flow
import moment from 'moment'
import React, { Component } from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';


type DateFilterProps = {
    onChange: (value: moment$Moment) => void,
    value: moment$Moment,
    autoOk: boolean,
    minDate?: moment$Moment,
    maxDate?: moment$Moment,
    locale: string|Object

}

const maybeToDate = value => value ? value.toDate() : undefined 

class DateFilter extends Component {
    props: DateFilterProps;
    state: { value: moment$Moment }
    static defaultProps: {
        onChange: () => void,
        autoOk: boolean,
        locale: string
    }

    constructor(props: DateFilterProps) {
        super(props)
        this.state = { value: props.value }
    }

    handleChange(date: Date) {
        const value = moment(date);
        this.setState({ value }, () => {
            this.props.onChange(value);
        });
    }

    render() {
        const { minDate, maxDate, ...other} = this.props;
        const value = this.state.value;

        return (
            <DatePicker
                {...other}
                onChange={this.handleChange.bind(this)}
                minDate={ maybeToDate(minDate) }
                maxDate={ maybeToDate(maxDate) }
                value={ maybeToDate(value) } />
        );
    }
}

DateFilter.defaultProps = {
    onChange: () => { },
    autoOk: true,
    locale: 'en'
}

export default DateFilter;