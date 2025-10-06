import React, { createContext, useContext, useEffect, useState } from "react";

export interface UserProfile {
  name: string;
  email?: string;
  avatar?: string; // emoji or image URL
  bio?: string;
}

interface ProfileContextValue {
  profile: UserProfile;
  updateField: <K extends keyof UserProfile>(key: K, value: UserProfile[K]) => void;
  saveProfile: () => void;
  clearProfile: () => void;
  loadProfile: () => void;
}

const STORAGE_KEY = "museUserProfile";

const defaultProfile: UserProfile = {
  name: "",
  email: "",
  avatar: "",
  bio: "",
};

const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  const loadProfile = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setProfile({ ...defaultProfile, ...(JSON.parse(raw) as UserProfile) });
      }
    } catch (e) {
      console.error("Failed to load profile", e);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const saveProfile = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error("Failed to save profile", e);
    }
  };

  const clearProfile = () => {
    setProfile(defaultProfile);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const updateField = (key, value) => {
    setProfile((p) => ({ ...p, [key]: value }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateField, saveProfile, clearProfile, loadProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextValue => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within a ProfileProvider");
  return ctx;
};
