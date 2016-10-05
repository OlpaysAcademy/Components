// @flow
import _ from 'lodash'
import React, { Component } from 'react'

import AutocompleteFilter from '../AutocompleteFilter';
import type { Items } from '../AutocompleteFilter/AutocompleteFilter' 

type OnChangeFn = (value: string) => void

type AsyncAutocompleteFilterProps = {
    onChange: OnChangeFn,
    value?: string,
    label: string,
    source: (param: string) => string,
    tranform: (res: Object) => Items,
}

class AsyncAutocompleteFilter extends Component {
    props: AsyncAutocompleteFilterProps;
    state: { 
        value: string | void,
        items: Items,
    }

    static defaultProps: {
        onChange: OnChangeFn,
        value: string,
        tranform: (res: Object) => Object
    }

    constructor(props: AsyncAutocompleteFilterProps) {
        super(props)
        this.state = { 
            value: props.value,
            items: [],
        }
    }

    handleChange(value: string) {
        const { onChange } = this.props;
        onChange(value);
    }

    fetchItems(event: KeyboardEvent) {
        console.log(event.key);
        console.log(this.state.value || '' + event.key);
        this.setState({ value: this.state.value || '' + event.key }, () => {
            fetch(this.props.source(this.state.value || ''))
                .then(res => res.json())
                .then(this.props.tranform)
                .then(items => this.setState({ items }));
        });
    }

    render() {
        const { label } = this.props
        return (
            <AutocompleteFilter
                label={label}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.fetchItems.bind(this)}
                items={this.state.items}
                value={this.state.value}
                />
        );
    }
}

AsyncAutocompleteFilter.defaultProps = {
    onChange: () => { },
    value: '',
    tranform: (res) => res
}

export default AsyncAutocompleteFilter;