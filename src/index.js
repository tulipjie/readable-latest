import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import reducer from './Reducers';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './css/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './css/font-awesome-4.7.0/css/font-awesome.min.css'
const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter >
      <App/>
    </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
