import React, { Component } from 'react';
import axios from '../../axios';
import './Posts.css';
import Post from '../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  }

  postSelectedHandler = (id) => {
    this.props.history.push({
      pathname: '/posts/' + id
    });
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
          <Post
           key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}/>
   );
      });
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id' } exact component={FullPost}/>
      </div>
    );
  }
}

export default Posts;
