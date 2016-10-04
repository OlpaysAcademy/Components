//@flow
import _ from 'lodash';
import R from 'ramda';
import React, { Component } from 'react';
import {
    Image,
    ListGroup,
} from 'react-bootstrap'

import type { NavigationItem } from '../../types';

import logo from './olpays-logo.png';
import './SideNavigation.css'

import SideNavigationItem from './SideNavigationItem'

type SideNavigationProps = {
    items: NavigationItem[]
}

class SideNavigation extends Component {
    props: SideNavigationProps

    state: {
        items: NavigationItem[]
    }

    constructor(props: SideNavigationProps) {
        super(props);
        this.state = { items: props.items };
    }

    toggleCollapse(index: number, event: Event) {
        if (!this.state.items[index].items) { return; }
        // Avoid the href event
        event.preventDefault();

        const items = this.state.items.map((item, i) => {
            if (i === index) { 
                return R.assoc('opened', !item.opened, item);
            }
            if (item.opened === true) {
                return R.assoc('opened', false, item);
            }
            return item;
        })

        this.setState({ items });
    }

    render() {
        return (
            <div className='SideNavigation'>
                <div className='SideNavigation-profile'>
                    <div className='SideNavigation-profile-image-wrapper' >
                        <Image className='SideNavigation-profile-image'
                            src={logo}
                            responsive />
                    </div>
                    <div className='SideNavigation-profile-data'>
                        <p className='SideNavigation-profile-data-name'>Nicolás Donna</p>
                        <p className='SideNavigation-profile-data-title'><small>La Facturería</small></p>
                    </div>
                </div>
                <ListGroup className='SideNavigation-list'>
                    {this.state.items.map((item, index) => (
                        <SideNavigationItem 
                            key={index}
                            item={item}
                            index={index}
                            toggleCollapse={(i, e) => this.toggleCollapse(i, e)} />
                    )) }
                </ListGroup>
            </div>
        )
    }
}

export default SideNavigation;