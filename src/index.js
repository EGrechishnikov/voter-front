import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './components/Store';
import {BrowserRouter, Route} from "react-router-dom";
import AppContainer from "./components/containters/AppContainer";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={AppContainer}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);