import React, { Component } from 'react'

class Login extends Component{

    state = {
        email : '',
        passwd : ''
    }

    handleChange = field => event =>{
        this.setState({
            [field]: event.target.value
        })
    }

    login = () =>{
        this.props.login(this.state.email,this.state.passwd )
    }

    render(){
        const errorMessages = {
            'auth/wrong-password' : 'E-mail e/ou senhas inválidos',
            'auth/user-not-found' : 'Usuário não encontrado',
            'auth/invalid-email' : 'E-mail inválido',
        }

    return(
        <div>
            <h4>Entre para comentar!</h4>
            <form className='form-inline'>
                <input type='text' className='form-control mr-2' onChange={this.handleChange('email')} placeholder='email' />
                <input type='password' className='form-control' onChange={this.handleChange('passwd')} placeholder='senha' />

                <button type='button' className='btn btn-primary ml-2' onClick={this.login} >Entrar</button>
                <button className='btn btn-success ml-2' onClick={() => this.props.changeScreen('signup')}>Criar Conta</button>
                
                
            </form>

            {
                    this.props.isAuthError && 

                    <div class="alert alert-danger mt-2" role="alert">
                        <b>Erro: </b> {errorMessages[this.props.authError]}
                    </div>

                    
                }
        </div>
    )}
}

export default Login