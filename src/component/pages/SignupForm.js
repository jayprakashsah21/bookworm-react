import React from 'react'
import PropTypes from 'prop-types'
import {Form,Button,Message} from 'semantic-ui-react'
import isEmail from 'validator/lib/isEmail'
import InlineError from '../pages/InlineError'

class SignupForm extends React.Component{
    state={
        data:{
          email:'',
          password:''  
        },
        loading: false,
        error:{}

    }

    onChange=e=>{
        this.setState({data:{...this.state.data,[e.target.name]:e.target.value}
        });
}

    onSubmit=(e)=>{
        e.preventDefault();
        const errors=this.validate(this.state.data);
        this.setState({errors});

        if(Object.keys(errors).length==0){
            this.setState({loading:true});
            this.props.submit(this.state.data)
                .catch(err=>this.setState({error:err.response.data.error,loading:false}));
        }

    };

    validate =data=>{
        const errors={};
        if(!isEmail(data.email)) errors.email="Invalid email";
        if(!data.password) errors.password="Can't be blank";
        return errors;

    }

    render(){
        const {data,error,loading} =this.state
        return(
            <Form onSubmit={this.onSubmit} loading={loading}>
            { /*   {error.email && (
                    <Message negative >
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{error.email}</p>
                    </Message>
                )} */}
                    <Form.Field error={!!error.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="jay@email.com" 
                        value={data.email} onChange={this.onChange}/>
        
                   
                    {error.email && <InlineError text={error.email}/>}
                    </Form.Field>

                    <Form.Field error={!!error.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="secure" value={data.password} 
                        onChange={this.onChange}/>
                        {error.password && <InlineError text={error.password}/>}
                    </Form.Field> 
            <Button primary >Sign Up</Button>
            </Form>    
        );
    }
}

SignupForm.propTypes={
    submit: PropTypes.func.isRequired
};

export default SignupForm