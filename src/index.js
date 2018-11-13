import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter, Route } from 'react-router-dom';

import UserProfile from './components/user';
import UserProfileList from './components/userlist';

const API_KEY = require('../config/key');

const client = new ApolloClient({
    link: new HttpLink({ uri: API_KEY.GRAPHQL_API_KEY }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Route path="/user" component={UserProfile}/>
          <Route path="/userlist" component={UserProfileList}/>

        </div>
      </BrowserRouter>
    </ApolloProvider>
  , document.querySelector('.container'));
