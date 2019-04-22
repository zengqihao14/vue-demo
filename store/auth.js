import { callAPI } from '~/middleware/API/api';
import Cookies from 'js-cookie';

const getUserFromCookie = () => {
  console.log('getUserFromCookie');
  const authToken = Cookies.get('AuthToken');
  const uid = Cookies.get('uid');
  if (authToken && uid) {
    return {
      authToken: authToken,
      uid: parseInt(uid)
    }
  } else {
    return {}
  }
};

export const state = () => ({
  loginUser: {},
  hasLogin: false,
  isBusy: false,
});

export const actions = {
  async doLogin({commit}, {username, password}) {
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
      const user = await callAPI(endpoint, options);
      commit('setLogin', user);
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
  },
  getUserFromCookie({commit}) {
    const user = getUserFromCookie();
    if (user) {
      commit('setLogin', user);
    }
  }
};

export const mutations = {
  setBusy(state) {
    state.isBusy = true;
  },
  unsetBusy(state) {
    state.isBusy = false;
  },
  setLogin(state, userdata) {
    state.loginUser = userdata;
    state.hasLogin = true;
  },
  unsetLogin(state) {
    state.loginUser = {};
    state.hasLogin = false;
  },
};
