import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Lucas'
    }

    postDataHandler = () => {
      const data = {
        title: this.state.title,
        body: this.state.content,
        autor: this.state.author
      }
      axios.post('https://jsonplaceholder.typicode.com/posts/', data)
        .then(response => {
          console.log(response);
        });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Adicionar um Post</h1>
                <label>Título</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Conteúdo</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Autor</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Lucas">Lucas</option>
                    <option value="Fernando">Fernando</option>
                </select>
                <button onClick={this.postDataHandler}>Adicionar Post</button>
            </div>
        );
    }
}

export default NewPost;
