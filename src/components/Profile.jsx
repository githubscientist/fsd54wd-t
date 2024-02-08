import React from 'react';
import { useProfile } from '../contexts/ProfileContext';

const Profile = () => {

  const { profile } = useProfile();

  return (
      <div>
          <h2>Profile Name: { profile.name }</h2>
    </div>
  )
}

export default Profile;