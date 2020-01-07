import React, { Component } from 'react'

class NewComment extends Component {

    state ={
        newComment : ''
    }

    handleChange = event =>{
        this.setState({
          newComment: event.target.value
        })
      }

    sendComment = () =>{
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment : ''
        })
    }

    render() {
        return (
        <div>
            <h3>Deixe seu comentário abaixo:</h3> <br />
            <form className='form-inline'>
                <textarea rows="5" cols="55" value={this.state.newComment} onChange={this.handleChange}></textarea>
                <button className='btn btn-primary ml-1' onClick={this.sendComment}>Enviar</button>
                { /*this.state.newComment */}
            </form>
        </div>
        )
    }
}

export default NewComment