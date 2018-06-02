import React from 'react';
import HomePage from './component/pages/HomePage'
import LoginPage from './component/pages/LoginPage'

import {Route} from 'react-router-dom'


const App=()=>
    ( <div>
     <Route path="/" exact component={LoginPage}>Login</Route>
     <Route path="/login" exact component={HomePage}>Home</Route>
    </div>
    );


export default App;
