import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

// https://github.com/reactwg/react-18/discussions/5
const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);