export default defineNuxtRouteMiddleware((to) => {
  const accessToken = useCookie('access_token');
  const refreshToken = useCookie('refresh_token');

  // Если есть хотя бы один токен, редиректим на главную
  if (accessToken.value || refreshToken.value) {
    return navigateTo('/');
  }
}); 