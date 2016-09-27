// @flow

import React, { Component } from 'react';

type Option = { value: string, message?: string } | string

type SelectFilterProps = {
    name: string,
    options: Option[],
    onChange: (value: string) => void
}

class SelectFilter extends Component {
    props: SelectFilterProps;
    static defaultProps: { onChange: () => void }

    render() {
        const { options, onChange } = this.props;
        const getOptionTag = (op: Option) => {
            if (typeof op === 'string') {
                return (<option key={op} value={op}>{op}</option>)
            }
            const message = op.message || op.value;

            return (<option key={op.value} value={op.value}>{message}</option>)
        }

        const handleChange = (event: Event) => {
            if (event.target instanceof HTMLSelectElement) {
                return onChange(event.target.value);
            }
            console.warn('Event is not from HTMLSelectElement');
        }
        return (
            <div>
                <select onChange={handleChange}>
                    {options.map(op => getOptionTag(op)) }
                </select>
            </div>
        );
    }
}

SelectFilter.defaultProps = {
    onChange: () => { }
}

export default SelectFilter;