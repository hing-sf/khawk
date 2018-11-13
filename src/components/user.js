import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchUserProfile from '../queries/fetchUserProfile';
import PlaneList from './PlaneList';
import { Link } from 'react-router-dom';

class UserProfile extends Component {

  render() {
    if (!this.props.data.account) return <div className="progress"><div className="indeterminate"></div></div>
    const userProfile = this.props.data.account.users[0]
    const userTotalFlights = userProfile.flights.length;

    const totalMins = userProfile.flights.reduce((prev, item) => {
      return prev + item.duration
    }, 0)

    return (
      <div>

          <Link to={`/user-in-depth/${userProfile.id}`} href="#!" className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
          </Link>
        <ul>
          <li>Profile: {userProfile.last_name}, {userProfile.first_name}</li>
          <li>Email: {userProfile.email}</li>
          <li>Number of Flights: {userTotalFlights}</li>
          <li>Total Flight Time: {totalMins}</li>
          <small>Days: {Math.floor(totalMins / 24) }</small> | <small>Hours: {Math.floor(totalMins / 60) }</small> | <small>Minuetes: {Math.floor(totalMins / 1000) }</small>
          <li>List of Aircraft: </li>
        </ul>
        <PlaneList planes={userProfile.flights}/>
      </div>
    );
  }
}

export default graphql(fetchUserProfile, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(UserProfile);