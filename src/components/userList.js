import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/fetchUserList'

class UserProfileList extends Component {
  renderProfile() {
    return this.props.data.account.users.map( user => {
      return (
        <tr key={user.id} className="collection-list">
          <td> { user.first_name }</td>
          <td>{ user.first_name }</td>
          <td>{ user.email }</td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.props.data.account)
    if( this.props.data.loading ) { return <div>Loading ...</div> }
    return (
      <div>

      <table className="highlight">
        <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {this.renderProfile()}
        </tbody>
      </table>

      </div>
    );
  }
}

export default graphql( query )( UserProfileList );