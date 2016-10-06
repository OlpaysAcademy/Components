import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';

addLocaleData(esLocaleData);

import './index.css';
import App from './App';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            locale: 'en',
            messages: {}
        };
    }
    componentDidMount() {
        fetch(`http://localhost:8080?locale=es`)
            .then(res => res.json())
            .then(({locale, messages}) => {
                this.setState({
                    locale,
                    messages
                });
            });
    }
    render() {
        return (
            <IntlProvider locale={this.state.locale} messages={this.state.messages}>
                <App />
            </IntlProvider>
        );
    }
}

export default Root;