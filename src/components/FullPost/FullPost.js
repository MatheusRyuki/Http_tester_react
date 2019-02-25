import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
      loadedPost: null
    }

    componentDidUpdate() {
      if (this.props.id) {
        if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id) {
          axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
              this.setState({loadedPost: response.data});
            });
        }
      }
    }

    deleteButtonHandler = () => {
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response => {
          console.log(response);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Por favor, escolha um post!</p>;
        if(this.props.id) {
           post = <p style={{textAlign: 'center'}}>Carregando...</p>;
        }
        if(this.state.loadedPost) {
          post = (
              <div className="FullPost">
                  <h1>{this.state.loadedPost.Title}</h1>
                  <p>{this.state.loadedPost.content}</p>
                  <div className="Edit">
                      <button className="Delete" onClick={this.deleteButtonHandler}>Deletar</button>
                  </div>
              </div>

          );
        }
        return post;
    }
}

export default FullPost;
