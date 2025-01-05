import { Profile } from '../types/profile';

export const mockUserApiCall = async (): Promise<Profile> => {
  try {
    const data = await fetch('/data/profile.json');
    const user = await data.json();

    console.log(user);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(user.profile);
      }, 2000);
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw new Error('Error fetching api');
  }
};
