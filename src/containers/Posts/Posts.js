import React, { Component } from 'react';
import axios from '../../axios';
import './Posts.css';
import Post from '../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id })
  };

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
          const posts = response.data.slice(0, 3);
          const updatedPosts = posts.map(post => {
            return {
                ...post,
                author: 'Testador'
            }
          });
          this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
      const posts = this.state.posts.map(post => {
        return <Post key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}/>
      });
    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;