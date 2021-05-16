import { getLocalStorageItem } from './../utils/localStorage';
import { useCurrentUser } from './useCurrentUser';

export function useAuthenticated(): boolean {
  const currentUser = useCurrentUser();
  return !!currentUser;
}

export function useAuthenticatedByLocalStorage(): boolean {
  const token = getLocalStorageItem('accessToken');
  return !!token;
}
