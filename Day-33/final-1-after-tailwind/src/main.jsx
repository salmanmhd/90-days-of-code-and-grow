import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Profile from './Profile';
import Profilev2 from './Profilev2';
import Profilev1 from './Profilev1';
import Profilenew from './Profilenew';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Profile />
    <Profilev1 />
    <Profilev2 />
    <Profilenew /> */}
  </React.StrictMode>
);
