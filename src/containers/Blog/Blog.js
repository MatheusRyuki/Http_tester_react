import React, { Component } from 'react';
import axios from '../../axios';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import Post from '../FullPost/FullPost'

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to={'/posts/'} exact activeStyle={{
                      color: '#fa923f',
                      textDecoration: 'underline'
                    }}>Posts</NavLink></li>
                    <li><NavLink to={'/new-post'}>Novo Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Switch>
                <Route path="/new-post" component={NewPost}/>
                <Route path="/posts/" component={Posts}/>
              </Switch>
            </div>
        );
    }
}

export default Blog;
