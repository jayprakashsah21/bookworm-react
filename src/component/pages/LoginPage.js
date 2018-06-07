import React from 'react';
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'
import {login} from '../../actions/auth'
import {connect} from 'react-redux'
import propTypes from 'prop-types'

class LoginPage extends React.Component{

    submit=data=>
       this.props.login(data).then(()=>this.props.history.push("/"));   
    
    render(){
        
        return(
        <div>
            <h1>Login</h1>
            <LoginForm submit={this.submit}/>
        </div>
        )}

}

LoginPage.propTypes = {
    history: propTypes.shape({
        push:propTypes.func.isRequired
    }).isRequired,
    login:propTypes.func.isRequired
};

export default connect(null,{login})(LoginPage)