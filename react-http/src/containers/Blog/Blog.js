import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render(){
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact 
                                // activeClassName="my-active"
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post', // relativní cesta
                                pathname: '/new-post', // relativní cesta
                                hash: '#submit',
                                search: '?quick-sumbit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;