import authService from './../services/auth-service';
import router from './../router';

const getUserFromLocalStorage = () => {
  let user = localStorage.getItem('user');
  // console.log(JSON.parse(user));

  return JSON.parse(user);
};

export default {
  state: {
    user: getUserFromLocalStorage(),
    token: localStorage.getItem('token'),
    errors: null
  },
  mutations: {
    SET_DATA(state, { user, token }) {
      state.user = user;
      state.token = token;
      state.errors = null;
    },
    SET_ERRORS(state, payload) {
      state.errors = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password, nextRouteName }) {
      try {
        const { user, token } = await authService.login(email, password);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        authService.setAuthHeaders(token);
        commit('SET_DATA', { user, token });
        router.push({ name: nextRouteName || 'movies' });
      } catch (error) {
        commit(
          'SET_ERRORS',
          error.response ? error.response.data.message : error
        );
      }
    },
    logout({ commit }) {
      authService.setAuthHeaders();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      commit('SET_DATA', { user: null, token: null });
      router.push({ name: 'login' });
    },
    async register(
      { commit },
      { name, email, password, password_confirmation, nextRouteName }
    ) {
      try {
        commit(
          'SET_DATA',
          await authService.register(
            name,
            email,
            password,
            password_confirmation
          )
        );
        router.push({ name: nextRouteName || 'login' });
      } catch (error) {
        commit(
          'SET_ERRORS',
          error.response ? error.response.data.message : error
        );
      }
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getErrors(state) {
      return state.errors;
    }
  }
};
