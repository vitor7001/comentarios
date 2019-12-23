import React, { Component } from 'react';

import Comments from './Comments'

import NewComment from './NewComment'

class App extends Component {
  
  state = {
    comments : [
      'Comment 1',
      'Comment 2',
      'Comment 3'
    ]
  }

  sendComment = comment =>{
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }



  render(){
  return (
    <div>
      { /* NOVO COMENTARIO */ }
      
      <NewComment sendComment={this.sendComment}/>

      { /* COMENTARIOS */ } 
     <Comments comments={this.state.comments}/>

    </div>
    
  )}
}

export default App;
