import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import UserProfile from './user';
import UserProfileList from './userlist';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route path="/user/:id" component={UserProfile}/>
            <Route path="/" exact strict component={UserProfileList}/>
          </div>
      </BrowserRouter>
    );
  }
}