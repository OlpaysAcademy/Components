// @flow
import React, { Component } from 'react';

import Filters from './Filters';
import SelectFilter from './SelectFilter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Filters>
          <SelectFilter name="status" options={[
            { value: 'asdf', message: 'qwer' },
            { value: 'pepe', message: 'zxcv' },
          ]}/>
        </Filters>
      </div>
    );
  }
}

export default App;
