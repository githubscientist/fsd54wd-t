/*
  Context API

  - Context API is a way to pass data through the component tree without having to pass props down manually at every level.
  - Context API is a way to have a global state in your application.
  - It has a Provider and a Consumer.

  Theme: 
    - A simple counter application with increment and reset button.

  How to use Context API:
    1. Create a context using createContext() method.
    2. Create a Provider component and wrap the components that need access to the context.
    3. Create a Consumer component to access the context.(useContext hook can be used to access the context)
*/

/*
  Session Task: Profile Name Changes using Context API

  1. Create a new component called ProfileContainer inside the containers folder.
  2. Create a new context called ProfileContext.
  3. Create a Provider component and wrap the components that need access to the context.
  4. Create a Consumer component to access the context.(useContext hook can be used to access the context)
  5. Create a Profile component inside the components folder.
  6. Create a ProfileName component inside the components folder.
  7. Typing the name in the ProfileName component should change the name in the Profile component.

*/

import React from 'react';
import ProfileContainer from './containers/ProfileContainer';

const App = () => {
  return (
    <div>
      <ProfileContainer />
    </div>
  )
}

export default App;