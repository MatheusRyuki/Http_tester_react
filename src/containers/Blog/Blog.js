import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
  return import('../NewPost/NewPost');
});

class Blog extends Component {
    state = {
      auth: true
    }
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
                { this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                <Route path="/posts/" component={Posts}/>
                <Redirect from="/" to="/posts" exact />
                <Route render={() => <h1> Não achado </h1>} />
              </Switch>
            </div>
        );
    }
}

export default Blog;
