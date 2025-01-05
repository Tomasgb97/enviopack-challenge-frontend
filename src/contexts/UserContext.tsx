import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';
import { Profile } from '../types/profile';
import { GetUserData } from '../services/user-service';

interface UserProfileContextProps {
  userProfile: Profile | null;
  setUserProfile: (profile: Profile) => void;
  consumeUserCredits: (amount: number) => boolean;
}

const UserProfileContext = createContext<UserProfileContextProps | undefined>(
  undefined
);

export const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<Profile | null>(null);

  const fetchUserData = useCallback(async () => {
    try {
      const data = await GetUserData();
      updateUser(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const updateUser = (user: Profile) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUserProfile(user);
  };

  const checkCreditsConsumption = (amount: number) => {
    if (!userProfile || amount > userProfile.credit) {
      return false;
    } else return true;
  };

  const consumeUserCredits = (amount: number) => {
    if (checkCreditsConsumption(amount) == false || !userProfile) {
      return false;
    }
    const updatedCreditsUser = {
      ...userProfile,
      credit: userProfile.credit - amount,
    };

    updateUser(updatedCreditsUser);
    return true;
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserProfile(user);
      return;
    }
    fetchUserData();
  }, []);

  return (
    <UserProfileContext.Provider
      value={{ userProfile, setUserProfile, consumeUserCredits }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = (): UserProfileContextProps => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};
