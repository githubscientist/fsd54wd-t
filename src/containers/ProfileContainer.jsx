import React from 'react';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import { ProfileProvider } from '../contexts/ProfileContext';

const ProfileContainer = () => {
  return (
    <ProfileProvider>
      <div>
        <Profile />
        <EditProfile />
      </div>
    </ProfileProvider>
  )
}

export default ProfileContainer;