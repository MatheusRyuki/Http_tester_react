import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p style={{textAlign: 'center'}}>Por favor, escolha um post!</p>;
        if(this.props.id) {
          post = (
              <div className="FullPost">
                  <h1>Título</h1>
                  <p>Conteúdo</p>
                  <div className="Edit">
                      <button className="Delete">Deletar</button>
                  </div>
              </div>

          );
        }
        return post;
    }
}

export default FullPost;
