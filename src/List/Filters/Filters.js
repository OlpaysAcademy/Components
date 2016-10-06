// @flow
import React, {Component}  from 'react';
import { FormattedMessage } from 'react-intl';
import { Popover, OverlayTrigger, Glyphicon } from 'react-bootstrap'
import Button from '../../Button'
import messages from './messages';

import './Filter.css'

type FiltersProps = {
    children?: () => React$Element<{}>,
    filterText: string,
}

class Filters extends Component {
    props: FiltersProps
    static defaultProps: {
        filterText: string
    }

    render() {
        const { filterText } = this.props;

        const popoverBottom = (
            <Popover id="Filters-Popover" className='Filters-Popover' style={{ maxWidth: 'none' }} >
                <div className='Filters-Popover-wrapper'>
                    <div className='Filter-Popover-actions'>
                        <Button secondary={true}><FormattedMessage {...messages.clear} /></Button>
                        <Button primary={true} className='pull-right'><FormattedMessage {...messages.apply} /></Button>
                    </div>
                    {this.props.children}
                </div>
            </Popover>
        );

        return (
            <div className='Filters'>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                    <Button>
                        <Glyphicon glyph='filter' />
                        {" "}
                        {filterText}
                    </Button>
                </OverlayTrigger>
            </div>
        );
    }
}

Filters.defaultProps = {
    filterText: 'Filters'
};

export default Filters;