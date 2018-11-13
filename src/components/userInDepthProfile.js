import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchUserFullProfile from '../queries/fetchUserInDepthProfile';
// import PlaneList from './PlaneList';

class UserInDepthProfile extends Component {

  render() {
    if (!this.props.data.account) return <div></div>
    const userProfile = this.props.data.account.users[0]
    const userTotalFlights = userProfile.flights.length;

    console.log(userProfile)

    const totalMins = userProfile.flights.reduce((prev, item) => {
      return prev + item.duration
    }, 0)

    return <div>
			<h2>In Depth Profile</h2>
			<ul>
				<li>
					Profile: {userProfile.last_name}, {userProfile.first_name}
				</li>
				<li>Email: {userProfile.email}</li>
				<li>Number of Flights: {userTotalFlights}</li>
				<li>Total Flight Time: {totalMins}</li>
				<small>
					Days: {Math.floor(totalMins / 24)}
				</small> | <small>Hours: {Math.floor(totalMins / 60)}</small> | <small>
					Minuetes: {Math.floor(totalMins / 1000)}
				</small>
				<li>List of Aircraft: </li>
			</ul>
			{/* <fetchUserFullProfile planes={userProfile.flights}/> */}
		</div>;
  }
}

export default graphql(fetchUserFullProfile, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(UserInDepthProfile);