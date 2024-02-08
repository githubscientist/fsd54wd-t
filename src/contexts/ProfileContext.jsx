import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState({
        name: ''
    });

    const updateProfile = (newName) => {
        setProfile({
            ...profile,
            name: newName
        });
    }

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext);
}