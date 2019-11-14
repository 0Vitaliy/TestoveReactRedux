import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Sidebar from "./pages/Sidebar";
import HomePage from './pages/HomePage'
import PostItem from './pages/Post'
import Posts from './pages/Posts'
import PostEditor from './pages/NewPost'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <Sidebar/>
        <div className='content'>
            <Switch >
              <Route exact path="/" component={HomePage} />
              <Route exact path="/posts" component= {Posts} />
              <Route path="/posts/:id" component= {PostItem} />
              <Route path="/post/new" component= {PostEditor} />
              <Route path="/post/:id" component= {PostEditor} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
