//@flow
import React, { Component } from 'react';
import {default as RSideBar} from 'react-sidebar'

import './SideBar.css'
import SideNavigation from './SideNavigation'
import type { NavigationItem } from '../types';

//Ignore this line no-use-before-define eslint rule because of recursive reference in flow
type MediaQueryListListener = (mql: MediaQueryList) => mixed; // eslint-disable-line no-use-before-define
type MediaQueryList = {
    matches: bool;
    addListener(listener: MediaQueryListListener): void;
    removeListener(listener: MediaQueryListListener): void;
};


export type SideBarProps = {
    children?: React$Element<{}>,
    onDockedChanged?: (docked: boolean) => void,
    items: NavigationItem[],
}

class SideBar extends Component {
    props: SideBarProps

    state: {
        docked: boolean,
        open: boolean,
        mql: MediaQueryList,
    }

    // This is for flow, remove it and see
    mediaQueryChanged: () => void

    constructor(props: {}) {
        super(props);
        const mql = window.matchMedia(`(min-width: 800px)`);
        this.state = { docked: false, open: false, mql };
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    }

    componentWillMount() {
        this.state.mql.addListener(this.mediaQueryChanged);
        this.changeDocked(this.state.mql.matches);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetOpen(open: boolean) {
        this.setState({ open: open });
    }

    toggleOpen(ev?: Event) {
        this.setState({ open: !this.state.open });

        if (ev) {
            ev.preventDefault();
        }
    }

    changeDocked(docked: boolean) {
        this.setState({ docked }, () => {
            if (this.props.onDockedChanged) {
                this.props.onDockedChanged(docked)
            };
        });
    }

    mediaQueryChanged() {
        this.changeDocked(this.state.mql.matches);
    }

    render() {
        return (
            <RSideBar
                sidebar={<SideNavigation items={this.props.items} />}
                docked={this.state.docked}
                open={this.state.open}
                onSetOpen={this.onSetOpen.bind(this) } >
                { this.props.children }
            </RSideBar >
        )
    }
}

export default SideBar;