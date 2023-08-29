const AUTH_USER__EMAIL = 'user-email';

export const getUserEmail = () => {
  const token = localStorage.getItem(AUTH_USER__EMAIL);
  return token ?? '';
};

export const saveUserEmail = (email: string) => {
  localStorage.setItem(AUTH_USER__EMAIL, email);
};

export const deleteUserEmail = (): void => {
  localStorage.removeItem(AUTH_USER__EMAIL);
};
