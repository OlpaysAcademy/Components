// @flow
import _ from 'lodash'
import React, { Component } from 'react'

import HTTP from '../../../libs/http'
import type {Headers} from '../../../libs/http'
import { AsyncSelect, LabeledInput } from '../../../Form';

type SelectOption = {
    value: string,
    label: string,
}

type AsyncSelectFilterProps = {
    url: (input: string) => string,
    headers?: Headers,
    transform: (res: any) => SelectOption[],
    label: string,
    [prop: string]: any,
}

class AsyncSelectFilter extends Component {
    props: AsyncSelectFilterProps
    state: { 
        loading: boolean
    }
    static defaultProps: {
        transform: (res: SelectOption[]) => SelectOption[]
    }

    http: HTTP
    handleLoadOptions: (input: string) => Promise<SelectOption[]>

    constructor(props: AsyncSelectFilterProps) {
        super(props);
        this.state = { loading: true }
        this.http = new HTTP(props.headers);
        
        this.handleLoadOptions = this.handleLoadOptions.bind(this);
    }

    componentWillReceiveProps(nextProps: AsyncSelectFilterProps) {
        this.http = new HTTP(nextProps.headers);
    }

    handleLoadOptions(input: string) {
        return this.http.get(this.props.url(input))
            .then(this.props.transform)
            .then(res => ({ options: res }))
    }

    render() {
        const { ...other, label } = this.props
        return (
            <LabeledInput label={label}>
                <AsyncSelect
                    placeholder={label}
                    {...other}
                    loadOptions={this.handleLoadOptions}
                    />
            </LabeledInput>
        );
    }
}

AsyncSelectFilter.defaultProps = {
    transform: (res: SelectOption[]) => res
}

export default AsyncSelectFilter;