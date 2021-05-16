export const localStore = {
  ACCESS_TOKEN: 'accessToken',
  CLIENT: 'client',
  UID: 'uid',
  EXPIRY: 'expiry',
  TOKEN_TYPE: 'token-type',
  AUTHORIZATION: 'Authorization',
};

export const getToken = () => {
  return localStorage.getItem(localStore.ACCESS_TOKEN);
};

export const getLocalStorageItem = (name: string) => {
  return localStorage.getItem(name);
};
