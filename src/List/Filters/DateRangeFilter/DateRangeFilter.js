// @flow
import moment from 'moment'
import React, { Component } from 'react';
import DatePicker from 'react-toolbox/lib/date_picker';
import { Button } from 'react-toolbox/lib/button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

import classes from './DateRangeFilter.scss';

type DateRangeFilterProps = {
    onChange: (from?: moment$Moment, to?: moment$Moment) => void,
    value: moment$Moment,
    autoOk: boolean,
    fromLabel: string,
    toLabel: string,
    minDate?: moment$Moment,
    maxDate?: moment$Moment,
    locale: string | Object
}

const maybeToDate = value => value ? value.toDate() : undefined

class DateRangeFilter extends Component {
    props: DateRangeFilterProps;
    state: {
        toActive: boolean,
        from?: moment$Moment,
        to?: moment$Moment
    }
    static defaultProps: {
        onChange: () => void,
        autoOk: boolean,
        locale: string,
    }

    constructor(props: DateRangeFilterProps) {
        super(props)
        this.state = {
            toActive: false
        }
    }

    handleFromChange(date: Date) {
        console.log('from changed');
        this.setState({
            from: moment(date).startOf('day'),
            toActive: true
        }, this.callOnChange.bind(this))
    }

    handleToChange(date: Date) {
        console.log('to changed');
        this.setState({
            to: moment(date).endOf('day'),
            toActive: false
        }, this.callOnChange.bind(this))
    }

    callOnChange() {
        const { from, to } = this.state;
        this.props.onChange(from, to)
    }

    clearRange() {
        this.setState({
            to: undefined,
            from: undefined,
            toActive: false
        }, () => {
            const { from, to } = this.state;
            this.props.onChange(from, to)
        })
    }

    clearToActive() {
        this.setState({ toActive: false })
    }

    render() {
        const { minDate, maxDate, fromLabel, toLabel, ...other} = this.props
        const { toActive, to, from } = this.state
        const bindedClearToActive = this.clearToActive.bind(this);
        // Missing clearToActive when clicking the cancel button
        const onToExit = {
            onEscKeyDown: bindedClearToActive,
            onOverlayClick: bindedClearToActive,
        }

        return (
            <div className={classes.DateRangeFilter}>
                <DatePicker
                    label={fromLabel}
                    {...other}
                    onChange={this.handleFromChange.bind(this) }
                    minDate={ maybeToDate(minDate) }
                    value={maybeToDate(from) }/>
                <DatePicker
                    label={toLabel}
                    {...other}
                    {...onToExit}
                    active={toActive}
                    onChange={this.handleToChange.bind(this) }
                    minDate={ maybeToDate(this.state.from) }
                    maxDate={ maybeToDate(maxDate) }
                    value={maybeToDate(to) } />
                <TooltipButton icon='grid_off'
                    tooltip='Clear'
                    className={classes.ClearButton}
                    onClick={this.clearRange.bind(this) } />
            </div>
        );
    }
}

DateRangeFilter.defaultProps = {
    onChange: () => { },
    autoOk: true,
    locale: 'en'
}

export default DateRangeFilter;