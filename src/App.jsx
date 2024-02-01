import React, { useEffect, useState } from 'react';

/*
  useEffect: 
    - useEffect is a hook that allows you to perform side effects in function components
    - side effects are anything that affects something outside of the scope of the function
      - examples: 
        - fetching data
        - setting up a subscription
        - manually changing the DOM
    - we can use useEffect in two ways:
      a. to run code only when the component mounts
      b. to run code when the component mounts and when it updates
*/

// Show the list of users from the API, https://jsonplaceholder.typicode.com/users
const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        setUsers(users);
        setLoading(false);

        console.log(users);
      } catch (error) {
        console.log('error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {
        loading ? (
          <p>loading data...</p>
        ) : (
            <div>
              <h2>List of Users</h2>

              <ul>
                {
                  users.map(user => (
                    <li key={user.id}>
                      {user.name}
                    </li>
                  ))
                }
              </ul>
            </div>
        )
      }
    </div>
  )
}

export default App;