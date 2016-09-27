// @flow
import React, {Component, Children, cloneElement}  from 'react';

type FiltersProps = {
    onChange: (state: Object) => void,
    children?: () => React$Element<{}>,
}

class Filters extends Component {
    props: FiltersProps
    state: {[key: string]: string }
    static defaultProps: { onChange: () => void }

    componentDidUpdate() {
        this.props.onChange(this.state);
    }
    

    render() {
        const onChange = ((params: Object) => {
            this.setState(params);
        }).bind(this);
        return (
            <div>
                { this.props.children && this.props.children(onChange) }
            </div>
        );
    }
}

Filters.defaultProps = {
    onChange: () => {},
}

export default Filters;