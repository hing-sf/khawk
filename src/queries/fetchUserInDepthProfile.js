import gql from 'graphql-tag';

export default gql`
	query fetchUserInDepthProfile($id: Int!) {
		account {
			users(id: $id) {
				id
				first_name
				last_name
				email
				flights {
					id
					latitude
					longitude
					duration
					notes
					pilot {
						id
						first_name
						last_name
						email
					}
					location {
						id
						name
						latitude
						longitude
						notes
					}
					aircraft {
						id
						name
						manufacturer
						model
						serial_number
					}
					batteries {
						id
						name
						manufacturer
						serial_number
					}
				}
			}
		}
	}
`;
