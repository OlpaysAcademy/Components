//@flow
import React, { Component } from 'react';
import {
    Glyphicon,
    Image,
    ListGroup,
} from 'react-bootstrap'

import type { Business } from '../types'
import './BusinessList.css'

import BusinessItem from './BusinessItem'
import Button from '../Button'

type BusinessProps = {
    businesses: Business[],
    currentId: string,
}

class BusinessList extends Component {
    props: BusinessProps

    render() {
        const { businesses, currentId } = this.props;
        const equalCurrent = b => b.id === currentId;
        const current = businesses.find(equalCurrent);
        const otherBusinesses = businesses.filter(b => !equalCurrent(b));

        return (
            <div className='BusinessList'>
                {current &&
                    <div className='BusinessList-current'>
                        <div className='BusinessList-current-image-wrapper' >
                            <Image className='BusinessList-current-image'
                                src={current.logo}
                                circle
                                responsive />
                        </div>
                        <div className='BusinessList-current-data'>
                            <p className='BusinessList-current-data-name'>{current.name}</p>
                            <p className='BusinessList-current-data-id'><small>{current.id}</small></p>
                        </div>
                    </div>
                }
                <div className='BusinessList-divider' />
                <ListGroup className='BusinessList-list'>
                    {otherBusinesses.map((item, index) => (
                        <BusinessItem key={index} business={item} />
                    )) }
                </ListGroup>
                <div className='BusinessList-actions'>
                    <Button className='BusinessList-actions-business' outline={true} bsStyle='primary'>
                        <Glyphicon glyph='plus' /> New Business
                    </Button>
                </div>
            </div>
        )
    }
}

export default BusinessList;