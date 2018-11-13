import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class UserProfile extends Component {
  renderProfile() {


    return this.props.data.account.users.map( user => {
      return (
        <li key={user.id} className="collection-list">
          name: { user.first_name }, { user.first_name }
          email: { user.email }

        </li>
      );
    });
  }

  render() {
    console.log(this.props.data.account)
    if( this.props.data.loading ) { return <div>Loading ...</div> }
    return (
      <ul className="collection">
        {this.renderProfile()}
      </ul>
    );
  }
}

const query = gql`
  {
     account {
      users {
        id
				first_name
        last_name
        email
        flights {
          id
        }
      }
    }
  }
`;

export default graphql( query )( UserProfile );