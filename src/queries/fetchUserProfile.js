import gql from 'graphql-tag';

export default gql`
    query GetUserId($id: Int!) {
     account {
      users(id: $id) {
         	first_name
	        last_name
  	    	email
  			flights {
          id
          duration
          pilot {
            id
          }
          aircraft {
            id
            manufacturer
            model
          }
        }
      }
    }
  }
`;