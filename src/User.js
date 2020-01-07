import React from 'react'

const User = (props) =>{
    return(
        <div>
            <h3>Logado como: <span class="badge badge-primary mr-5">{props.email}</span>
            <button className='btn btn-dark' onClick={props.logout}>Sair</button> </h3>
        </div>
    )
}

export default User
