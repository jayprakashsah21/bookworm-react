import React from 'react';
import HomePage from './component/pages/HomePage'
import LoginPage from './component/pages/LoginPage'
import DashboardPage from './component/pages/DashboardPage'
import SignupPage from './component/pages/SignupPage'
import ConfirmationPage from './component/pages/ConfirmationPage'
import ForgotPasswordPage from './component/pages/ForgotPasswordPage'
import ResetPasswordPage from './component/pages/ResetPasswordPage'
import {Route} from 'react-router-dom'
import UserRoute from './component/routes/UserRoute'
import GuestRoute from './component/routes/GuestRoute'
import TopNavigation from './component/navigations/TopNavigation'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import NewBookPage from './component/pages/NewBookPage'


const App=({location, isAuthenticated})=>
    ( <div className="ui container">
    { isAuthenticated && <TopNavigation/> }
     <Route location={location} path="/" exact component={HomePage}>Home page</Route>
     <Route location={location} path="/confirmation/:token" exact component={ConfirmationPage}>Confirmation Page</Route>
     <GuestRoute location={location} path="/login" exact component={LoginPage}>Login Page</GuestRoute>
     <GuestRoute location={location} path="/signup" exact component={SignupPage}>Signup Page</GuestRoute>
     <GuestRoute location={location} path="/forgot_password/" exact component={ForgotPasswordPage}>Signup Page</GuestRoute>
     <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage}>Signup Page</GuestRoute>
     <UserRoute location={location} path="/dashboard" exact component={DashboardPage}>Dashboard Page</UserRoute>
     <UserRoute location={location} path="/books/new" exact component={NewBookPage}>Dashboard Page</UserRoute>
    </div>
    );

    App.propTypes={

      location: PropTypes.shape({
        pathname:PropTypes.string.isRequired
      }).isRequired,
      isAuthenticated: PropTypes.bool.isRequired
    }
 function mapStateToProps(state){
   return {
     isAuthenticated :!!state.user.email
   };
 }   

export default connect(mapStateToProps)(App);
