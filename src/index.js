import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/mobile.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
require('raven-bank-ui/dist/esm/styles/index.css')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <BrowserRouter>

  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
  </Provider>

);

