import React, { Component } from 'react';

import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: false,
    }
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
                    <Route path="/new-post" component={AsyncNewPost} />
                    {/* {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null} */}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Ooups, Not found</h1>}/> {/* Catch all/unknown routes 404 */}
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;