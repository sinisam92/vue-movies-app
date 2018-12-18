import http from './http-service';

class AuthService {
  login(email, password) {
    return http
      .post('auth/login', {
        email,
        password
      })
      .then(({ data }) => data);
  }
  register(name, email, password, password_confirmation) {
    return http
      .post('auth/register', {
        name,
        email,
        password,
        password_confirmation
      })
      .then(({ data }) => data)
      .catch((error) => {
        return Promise.reject(error.response.data.errors);
      });
  }
  setAuthHeaders(token) {
    if (!token) {
      delete http.defaults.headers.common['Authorization'];
    }
    return (http.defaults.headers.common['Authorization'] = `Bearer ${token}`);
  }
}
const checkForInitialToken = (authService) => {
  let token = localStorage.getItem('token');
  if (token) {
    authService.setAuthHeaders(token);
  }
};

const authService = new AuthService();
checkForInitialToken(authService);
export default authService;
