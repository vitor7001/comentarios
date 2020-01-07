import React, { Component } from 'react'

class SignUp extends Component{

    state = {
        email : '',
        passwd : ''
    }

    handleChange = field => event =>{
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () =>{
        this.props.createAccount(this.state.email,this.state.passwd )
    }

    render(){
        const errorMessages = {
            'auth/email-already-in-use' : 'Este e-mail já foi utilizado',
            'auth/weak-password' : 'Senha muito fraca',
            'auth/invalid-email' : 'E-mail inválido',
        }

    return(
        <div>
            <h4>Criar conta</h4>
            <form className='form-inline'>
                <input type='text'  className='form-control mr-2' onChange={this.handleChange('email')} placeholder='email' />
                <input type='password' className='form-control mr-2' onChange={this.handleChange('passwd')} placeholder='senha' />

                <button type='button' className='btn btn-info mr-2' onClick={this.createAccount} >Criar conta</button>

                <button className='btn btn-warning' onClick={() => this.props.changeScreen('login')}>Já possuo uma conta</button>
            </form>
            
            {
                    this.props.isSignUpError && 

                    <div class="alert alert-danger mt-2" role="alert">
                        <b>Erro: </b> {errorMessages[this.props.signUpError]}
                    </div>

                }
        </div>
    )}
}

export default SignUp