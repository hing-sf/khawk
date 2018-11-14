### Kittyhawk Getting Started
npm install

### server
npm start


#### I created a config file which contain the api key, I will email with submission.
#### graphQL example
{
     account {
      users {
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