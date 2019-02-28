import React, { Component } from 'react';
import axios from '../../axios';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import { Route, NavLink } from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to={'/'} exact activeStyle={{
                      color: '#fa923f',
                      textDecoration: 'underline'
                    }}>Home</NavLink></li>
                    <li><NavLink to={'/new-post'}>Novo Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Route path="/" exact component={Posts}/>
              <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;
