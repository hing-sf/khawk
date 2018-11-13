import gql from 'graphql-tag';

export default gql`
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