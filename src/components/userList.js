import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/fetchUserList'

class UserProfileList extends Component {
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
      <div>
        <h2>User Profile List</h2>
        <ul className="collection">
            {this.renderProfile()}
        </ul>
      </div>
    );
  }
}

export default graphql( query )( UserProfileList );