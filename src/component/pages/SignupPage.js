
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SignupFrom from '../pages/SignupForm'
import {signup} from '../../actions/users' 

class SignupPage extends React.Component{

submit =data =>this.props.signup(data).then(()=>this.props.history.push("/dashboard"));

    render (){
        return (
            <div>
                <SignupFrom submit={this.submit}/>
            </div>    
        );

    }

}

SignupPage.propTypes={
    history: PropTypes.shape(
        {
            push: PropTypes.func.isRequired
        }
    ).isRequired,
    signup:PropTypes.func.isRequired     
}


export default connect(null,{signup})(SignupPage)