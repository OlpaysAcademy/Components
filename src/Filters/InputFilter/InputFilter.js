// @flow

import _ from 'lodash'
import React, { Component } from 'react'
import Input from 'react-toolbox/lib/input'

type OnChangeFn = (value: string) => void

type InputFilterProps = {
    onChange: OnChangeFn,
    value?: string,
    name: string,
    label: string,
}

class InputFilter extends Component {
    props: InputFilterProps;
    state: { value: string | void }
    static defaultProps: {
        onChange: OnChangeFn,
        value: string,
    }

    constructor(props: InputFilterProps) {
        super(props)
        this.state = { value: props.value }
    }

    componentWillReceiveProps(newProps: InputFilterProps) {
        if (this.props.value !== newProps.value) {
            this.setState({ value: newProps.value });
        }
    }

    handleChange(value: string) {
        const { onChange } = this.props;
        this.setState({ value }, () => {
            onChange(value);
        });
    }

    render() {
        const { ...other } = this.props
        return (
            <Input
                {...other}
                type='text'
                value={this.state.value}
                onChange={this.handleChange.bind(this) }
                />
        );
    }
}

InputFilter.defaultProps = {
    onChange: () => { },
    value: '',
}

export default InputFilter;