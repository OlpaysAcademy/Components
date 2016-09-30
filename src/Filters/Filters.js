// @flow
import React, {Component}  from 'react';
import classes from './Filters.scss'


type FiltersProps = {
    onChange: (params: { [key: string]: string }) => void,
    children?: () => React$Element<{}>,
    params: Object
}

class Filters extends Component {
    props: FiltersProps
    state: { params: { [key: string]: string } }
    static defaultProps: { onChange: (params: Object) => void }

    constructor(props: FiltersProps) {
        super(props);
        this.state = { params: props.params }
    }

    componentWillReceiveProps(newProps: FiltersProps) {
        if (this.props.params !== newProps.params) {
            this.setState({ params: newProps.params });
        }
    }

    render() {
        const onChange = ((params: Object) => {
            this.setState({ params }, () => {
                this.props.onChange(this.state.params);
            });
        })
        return (
            <div className={classes.Filters}>
                { this.props.children && this.props.children(onChange) }
            </div>
        );
    }
}

Filters.defaultProps = {
    onChange: () => { },
}

export default Filters;