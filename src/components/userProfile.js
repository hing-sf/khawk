import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UserProfile extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Kittyhawk Profile
      </div>
    );
  }
}

const query = gql`
  {
    account {
      id
      name
    }
  }
`;

export default graphql( query )( UserProfile );