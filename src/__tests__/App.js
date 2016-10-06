import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mediaQueryMock = () => ({
    matches: true,
    addListener: () => {},
    removeListener: () => {},
})
window.matchMedia = mediaQueryMock();

xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
