import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Test from './components/Test';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
