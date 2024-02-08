import React from 'react';
import { useProfile } from '../contexts/ProfileContext';

const EditProfile = () => {

  const { updateProfile } = useProfile();

  return (
      <div>
          <input 
            type='text'
            placeholder='Enter your name...'
            onChange={(e) => updateProfile(e.target.value)}
          />
    </div>
  )
}

export default EditProfile;