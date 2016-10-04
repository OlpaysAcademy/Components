//@flow
import React from 'react';
import {
    Image,
    ListGroupItem,
} from 'react-bootstrap'

import './BusinessItem.css'
import type { Business } from '../../types'

type BusinessItemProps = {
    business: Business,
}

const BusinessItem = ({business}: BusinessItemProps) => (
    <ListGroupItem className='BusinessItem'>
        <div className='BusinessItem-image-wrapper' >
            <Image className='BusinessItem-image'
                src={business.logo}
                circle
                responsive />
        </div>
        <div className='BusinessItem-data'>
            <p className='BusinessItem-data-name'>{business.name}</p>
            <p className='BusinessItem-data-id'><small>{business.id}</small></p>
        </div>
    </ListGroupItem>
)

export default BusinessItem;