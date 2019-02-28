import React, { Component } from 'react';
import axios from '../../axios';
import './Posts.css';
import Post from '../../components/Post/Post';
import { Link } from 'react-router-dom';

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
        return (
          <Link key={post.id} to={'/' + post.id}>
          <Post
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}/>
        </Link> );
      });
    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;
