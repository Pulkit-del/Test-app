import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';

const history = createBrowserHistory();
const storee = store();

ReactDOM.render(
<Provider store = {storee}> 
<ConnectedRouter history = {history} >
        <App />
        </ConnectedRouter>
    </Provider>,
     document.getElementById('app'))