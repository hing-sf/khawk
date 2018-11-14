import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/app';

// const API_KEY = require('../config/key');
const API_KEY = ""

const client = new ApolloClient({
    link: new HttpLink({ uri: API_KEY.GRAPHQL_API_KEY }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  , document.querySelector('.container'));
