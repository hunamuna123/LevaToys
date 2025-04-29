export const isAuthenticated = () => {
  const cookies = document.cookie.split(';');
  return cookies.some(cookie => cookie.trim().startsWith('access_token='));
};

export const getAuthHeaders = () => {
  const cookies = document.cookie.split(';');
  const accessToken = cookies.find(cookie => cookie.trim().startsWith('access_token='))?.split('=')[1];
  return accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {};
}; 