// @flow
import React, { Component } from 'react';

import {
    Glyphicon,
    Nav,
    Navbar,
    NavItem,
    OverlayTrigger,
    Popover,
} from 'react-bootstrap'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import { generatePage } from './util';

import './App.css';

import SideBar from './SideBar'
import BusinessList from './BusinessList'
import ListPage from './ListPage'

const items = [
    { icon: 'home', label: 'Home', route: '/' },
    { icon: 'credit-card', label: 'Payments', route: '/asdf' },
    { icon: 'piggy-bank', label: 'Extractions', route: '/asdf' },
    {
        icon: 'cog', label: 'Configuration', route: '/asdf', opened: false, items: [
            { label: 'Home', route: '/asdf' },
            { label: 'Payments', route: '/asdf' },
            { label: 'Extractions', route: '/asdf' },
        ]
    },
    {
        icon: 'th', label: 'Things', route: '/asdf', opened: false, items: [
            { label: 'Papa', route: '/asdf' },
            { label: 'Pepe', route: '/asdf' },
            { label: 'Pipi', route: '/asdf' },
            { label: 'Popo', route: '/asdf' },
            { label: 'Pupu', route: '/asdf' },
        ]
    },
]

const businesses = [
    { id: '57f24a80c7a8cdd9d0e98de3', name: 'La Facturería de la persona que hace facturas y le encanta facturear locos', logo: 'https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg' },
    { id: '57f24a80c7a8cdd9d0e98de4', name: 'Pedro', logo: 'http://vignette2.wikia.nocookie.net/napoleondynamite/images/b/b1/Pedro-sanchez.jpg/revision/latest?cb=20091207012033' },
    { id: '57f24a80c7a8cdd9d0e98de5', name: 'Papa', logo: 'http://www.experimentosfaciles.com/wp-content/uploads/2016/01/papa.jpg' },
    {
        id: '57f24a80c7a8cdd9d0e98de5',
        name: 'El Santo (The Saint), was a Mexican Luchador enmascarado (Spanish for masked professional wrestler), film actor, and folk icon.',
        logo: 'http://az778189.vo.msecnd.net/media/fotos/g/6828e10633df9b7dec99f01d1615214d.jpg'
    },
]

class App extends Component {

    state: {
        sideBarDocked: boolean
    }

    sideBar: SideBar;

    constructor(props: any) {
        super(props);
        this.state = { sideBarDocked: false }
    }

    handleDockedChange(docked: boolean) {
        this.setState({ sideBarDocked: docked });
    }

    render() {
        //The style-maxWidth hack is to have a bigger popover. the 'bsClass' prop creates more problems than it solves
        const popoverBottom = (
            <Popover
                id="App-Business-Popover"
                style={{ maxWidth: 'none' }} >
                <BusinessList businesses={businesses} currentId='57f24a80c7a8cdd9d0e98de3' />
            </Popover>
        );
        return (
            <Router>
                <div className="App">
                    <SideBar
                        ref={sideBar => { this.sideBar = sideBar; } }
                        items={items}
                        onDockedChanged={ docked => this.handleDockedChange(docked) }>
                        <Navbar className='App-Navbar' fluid>
                            <Navbar.Header>
                                <Navbar.Brand className='App-Navbar-Brand'>
                                    {/* 
                                    Use the ref, because is the easiest way to link
                                    It can also be done with callback children
                                 */}
                                    { !this.state.sideBarDocked &&
                                        <Glyphicon
                                            glyph="menu-hamburger"
                                            className='App-Navbar-Brand-side-toggle'
                                            onClick={e => this.sideBar && this.sideBar.toggleOpen(e) }
                                            />
                                    }
                                    <a href="#">Olpays</a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Nav className='App-Navbar-Nav'>
                                <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
                                    <NavItem eventKey={1} href="#">
                                        <Glyphicon glyph='th' />
                                    </NavItem>
                                </OverlayTrigger>
                                <NavItem eventKey={2} href="#">Logout</NavItem>
                            </Nav>
                        </Navbar>
                        <Match exactly pattern="/" component={generatePage(ListPage, 'List', { padded: false }) } />
                        <Miss component={generatePage(() => (<p>No se encontro</p>), '404')} />
                    </SideBar>
                </div >
            </Router>
        );
    }
}


export default App;
