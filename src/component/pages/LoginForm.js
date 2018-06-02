import React,{Component} from 'react'
import {Form,Button} from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from './InlineError';
import PropTypes from 'prop-types'


 class LoginForm extends Component{

        state={
            data:{email:"jay",password:"xxxx"},
            loading:false,
            error:{}
        }

        onChange=e=>{
                this.setState({data:{...this.state.data,[e.target.name]:e.target.value}
                });
        }


        onSubmit=()=>{
            const error=this.validate(this.state.data);
            this.setState({error});
            if(Object.keys(error).length==0){
                this.props.submit(this.state.data);
            }
        }

        validate=data => {
            const error={};
            if(!Validator.isEmail(data.email)) error.email="Invalid email";
            if(!data.password) error.password="Can't be black";
            return error;
        }


        render(){
            const {data,error}=this.state;
            return(
                <Form onSubmit={this.onSubmit}>
                    <Form.Field error={!!error.email}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="jay@email.com" value={data.email} onChange={this.onChange}/>
        
                   
                    {error.email && <InlineError text={error.email}/>}
                    </Form.Field>

                    <Form.Field error={!!error.password}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="secure" value={data.password} onChange={this.onChange}/>
                        {error.password && <InlineError text={error.password}/>}
                    </Form.Field>   
                    <Button primary>Login</Button>
                </Form>    
            )

    }
}   

LoginForm.propTypes={
    submit:PropTypes.func.isRequired
}

export default LoginForm