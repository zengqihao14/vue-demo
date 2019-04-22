import { callAPI } from '~/middleware/API/api';

export const state = () => ({
  hasLogin: false,
  isBusy: false,
});

export const actions = {
  async doLogin({commit}, {username, password}) {
    console.log('username, password', username, password);
    const endpoint = {
      path: '/api/login',
      method: 'post',
      authorization: false
    };
    const options = {
      data: {
        username,
        password
      },
      withCredentials: true
    };
    try {
      commit('setBusy');
      await callAPI(endpoint, options);
      commit('setLogin');
      commit('unsetBusy');
    } catch (err) {
      commit('unsetBusy');
    }
  },
  async doLogout({commit}) {
    const endpoint = {
      path: '/api/logout',
      method: 'post',
      authorization: false
    };
    const options = {
      withCredentials: true
    };
    try {
      commit('setBusy');
      await callAPI(endpoint, options);
      commit('unsetLogin');
      commit('unsetBusy');
    } catch (err) {
      commit('unsetBusy');
    }
  }
};

export const mutations = {
  setToken(token) {
    state.authToken = token;
  },
  unsetToken() {
    state.authToken = '';
  },
  setBusy(state) {
    console.log('mutations setBusy: this', this);
    console.log('mutations setBusy: state', state);
    console.log('setBusy state.isBusy', state);
    state.isBusy = true;
  },
  unsetBusy(state) {
    console.log('unsetBusy state.isBusy', state);
    state.isBusy = false;
  },
  setLogin(state) {
    state.hasLogin = true;
  },
  unsetLogin(state) {
    state.hasLogin = false;
  },
};
