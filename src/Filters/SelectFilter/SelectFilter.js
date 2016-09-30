// @flow
import React, { Component } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';

type Option = { value: string, label?: string }

type SelectFilterProps = {
    options: Option[],
    onChange: (value: string) => void,
    value?: string
}

class SelectFilter extends Component {
    props: SelectFilterProps;
    state: { value: string | void }
    static defaultProps: { onChange: () => void }

    constructor(props: SelectFilterProps) {
        super(props)
        this.state = { value: props.value }
    }

    componentWillReceiveProps(newProps: SelectFilterProps) {
        if (this.props.value !== newProps.value) {
            this.setState({ value: newProps.value });
        }
    }

    handleChange(value: string) {
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        const { options, ...other } = this.props; 
        return (
            <Dropdown
                {...other}
                auto
                onChange={this.handleChange.bind(this)}
                source={options}
                value={this.state.value}
                />
        );
    }
}

SelectFilter.defaultProps = {
    onChange: () => { }
}

export default SelectFilter;