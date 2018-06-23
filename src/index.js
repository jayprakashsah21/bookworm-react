import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css"
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
//redux
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from "./rootReducer";
import { userLoggedIn } from './actions/auth';
import decode from 'jwt-decode';

const store= createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.bookwormJWT){
    const payload=decode(localStorage.bookwormJWT);
    const user ={
        token: localStorage.bookwormJWT,
        email: payload.email,
        confirmed: payload.confirmed
    }
    setAuthorizationHeader(localStorage.bookwormJWT);
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
