import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './routes';

// Render the main component into the dom
ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('app')
);
