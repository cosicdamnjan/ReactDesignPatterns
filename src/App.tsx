import React from 'react';
import logo from './logo.svg';
import './App.css';

import './examples/adapter/adapter';
import './examples/adapter/adapter1';
import './examples/adapter/adapter2';

import './examples/builder/builder';
import './examples/builder/builder1';
import './examples/builder/builder3';

import './examples/composite/composite';
import './examples/composite/composite1';
import './examples/composite/composite3';

import './examples/factory/factory';
import './examples/factory/factory1';
import './examples/factory/abstractFactory';
import './examples/factory/abstractFactory1';

import './examples/mediator/mediator';
import './examples/mediator/mediator2';
import './examples/mediator/mediator3';

import './examples/observer/observer';
import './examples/observer/observer1';
import './examples/observer/observer2';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
