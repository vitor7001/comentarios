import React, { Component } from 'react';

class App extends Component {
  
  state = {
    comments : [
      'Comment 1',
      'Comment 2',
      'Comment 3'
    ]
  }

  sendComment =() =>{
    this.setState({
      comments: [...this.state.comments, 'Comentário novo']
    })
  }

  render(){
  return (
    <div>
      { /* NOVO COMENTARIO */ }
      <div>
        <textarea></textarea>
        <button onClick={this.sendComment}>Enviar</button>
      </div>

      { /* COMENTARIOS */ } 
      <div>
        { this.state.comments.map( c => {
          return <div>{c}</div>
        } )}
      
      </div>

    </div>
    
  )}
}

export default App;
