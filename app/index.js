import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter } from 'react-router-redux';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';

const storee = store();

ReactDOM.render(<Provider store = {storee}> 
        <App />
    </Provider> , document.getElementById('app'))