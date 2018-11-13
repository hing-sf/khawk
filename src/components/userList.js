import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/fetchUserList'
import { Link } from 'react-router-dom';

class UserProfileList extends Component {
  renderProfile() {
    return this.props.data.account.users.map(user => {
      return (
          <Link to={`/user/${user.id}`} key={user.id} href="#!" className="collection-item">
              {user.first_name} | {user.first_name} | {user.email}
          </Link>
      );
    });
  }

  render() {
    console.log(this.props.data.account)
    if (this.props.data.loading) { return  <div className="progress"><div className="indeterminate"></div></div> }
    return (
        <div className="collection">
          {this.renderProfile()}
        </div>
    );
  }
}

export default graphql(query)(UserProfileList);