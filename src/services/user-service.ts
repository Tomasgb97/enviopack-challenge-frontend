import { mockUserApiCall } from '../lib/mockUserApi';
import { Profile } from '../types/profile';

export const GetUserData = async (): Promise<Profile> => {
  return await mockUserApiCall();
};
