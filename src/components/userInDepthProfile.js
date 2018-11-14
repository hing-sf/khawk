import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchUserInDepthProfile from '../queries/fetchUserInDepthProfile';

class UserInDepthProfile extends Component {

  renderFlight() {
    const userProfile = this.props.data.account.users;
    const flights = userProfile[0].flights;

    return flights.map(flight => {
console.log(flight)
      let pilot, aircraft, location, batteries;
      try {
        if (flight) {
          pilot = Object.values(flight.pilot)
          aircraft = Object.values(flight.aircraft)
          location = Object.values(flight.location)
          batteries = Object.values(flight.batteries)

        }
      } catch (err) {
        console.log(err)
      }

      return (
        <tr key={flight.id}>
          <td>{flight.id}</td>
          <td>{flight.latitude}</td>
          <td>{flight.longitude}</td>
          <td>{flight.duration}</td>
          <td>{flight.notes}</td>
          <td>{pilot}</td>
          <td>{aircraft}</td>
          <td>{location}</td>
          <td>{batteries}</td>
        </tr>
      )
    });
  }

  // renderList( obj ){
  //   const converted = []
  //   for(let key in obj){
  //     converted.push({key:obj[key]})
  //   }
  //   console.log(converted)
  //   return converted;
  // }

  render() {
    if (!this.props.data.account) return <div className="progress"><div className="indeterminate"></div></div>

    const userProfile = this.props.data.account.users[0]
    // console.log(userProfile.flights)

    return (
      <div>
        <h4>User Profile</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userProfile.id}</td>
              <td>{userProfile.first_name}</td>
              <td>{userProfile.last_name}</td>
              <td>{userProfile.email}</td>
            </tr>
          </tbody>
        </table>


        <h4>Flight</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Duration</th>
              <th>Notes</th>
              <th>Pilot</th>
              <th>Aircraft</th>
              <th>Location</th>
              <th>Batteries</th>
            </tr>
          </thead>
          <tbody>
            {this.renderFlight()}

          </tbody>
        </table>

      </div>
    );
  }
}

export default graphql(fetchUserInDepthProfile, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(UserInDepthProfile);