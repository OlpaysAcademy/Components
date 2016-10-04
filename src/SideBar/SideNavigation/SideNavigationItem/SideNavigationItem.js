//@flow
import React from 'react';
import {
    Glyphicon,
    ListGroupItem,
} from 'react-bootstrap'
import Link from 'react-router/Link'
import Collapse from 'react-collapse'

import type { NavigationItem } from '../../../types';

import './SideNavigationItem.css'

type ListItemProps = {
    index: number,
    item: NavigationItem,
    toggleCollapse?: (index: number, event: Event) => void
}

const ListItem = ({index, item, toggleCollapse}: ListItemProps) => (
    <ListGroupItem className='SideNavigationItem-list-item'>
        <Link to={item.route} className='SideNavigationItem-list-item-Link'
            onClick={event => toggleCollapse && toggleCollapse(index, event) } >
            <Glyphicon glyph={item.icon} className='SideNavigationItem-list-item-a-Glyphicon'/>
            <span className='SideNavigationItem-list-item-a-span'>
                {item.label}
                {item.items &&
                    <Glyphicon
                        glyph={item.opened ? 'chevron-down' : 'chevron-right'}
                        className='SideNavigationItem-list-item-a-span-chevron' />
                }
            </span>
        </Link>
        {item.items &&
            <Collapse isOpened={item.opened} className='SideNavigationItem-Collapse'>
                <ul className='SideNavigationItem-Collapse-ul'>
                {item.items.map((childItem, index) => (
                    <li key={`${item.label}-${index}`} className='SideNavigationItem-Collapse-ul-li' >
                        <Link 
                            className='SideNavigationItem-Collapse-ul-li-Link' 
                            to={childItem.route}>{childItem.label}</Link>
                    </li>
                )) }
                </ul>
            </Collapse>
        }
    </ListGroupItem>
)

export default ListItem;