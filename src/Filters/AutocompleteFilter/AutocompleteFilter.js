// @flow

import _ from 'lodash'
import React, { Component } from 'react'
import Autocomplete from 'react-toolbox/lib/autocomplete';

export type Items = string[]|{[key: string]: string};
type OnChangeFn = (value: string) => void

type AutocompleteFilterProps = {
    onChange: OnChangeFn,
    onKeyPress: (e: KeyboardEvent) => void,
    value?: string,
    label: string,
    items: Items,
}

class AutocompleteFilter extends Component {
    props: AutocompleteFilterProps;
    state: { value: string | void }
    static defaultProps: {
        onChange: OnChangeFn,
        value: string,
        multiple: boolean,
        onKeyPress: (e: KeyboardEvent) => void,
    }

    constructor(props: AutocompleteFilterProps) {
        super(props)
        this.state = { value: props.value }
    }

    componentWillReceiveProps(newProps: AutocompleteFilterProps) {
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
        const { items, ...other } = this.props
        return (
            <Autocomplete
                {...other}
                //Without this the event is not properly received on parent components
                onKeyPress={e => this.props.onKeyPress(e)}
                onChange={this.handleChange.bind(this)}
                source={items}
                value={this.state.value}
                />
        );
    }
}

AutocompleteFilter.defaultProps = {
    onKeyPress: () => { },
    onChange: () => { },
    value: '',
    multiple: false,
}

export default AutocompleteFilter;