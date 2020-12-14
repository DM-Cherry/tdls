// eslint-disable-next-line no-unused-vars
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    // user: false,
    user: {
      name: 'cherry',
      mobile: '17600825312',
      email: '936430210@qq.com',
      avatar: '',
    },
  },
  mutations: {
    fetch(state, payload) {
      state.user = payload.user;
      console.log('1', state.user);
      this._vm.$storage.user.setItem('currentUser', state.user);
    },
    name(state, name) {
      console.log('2');
      if (state.user && state.user.name) {
        state.user.name = name;
        this._vm.$storage.user.setItem('currentUser', state.user);
      }
    },
    mobile(state, mobile) {
      console.log('3');
      if (state.user && (state.user.mobile || state.user.mobile == null)) {
        state.user.mobile = mobile;
        this._vm.$storage.user.setItem('currentUser', state.user);
      }
    },
    email(state, email) {
      console.log('4');
      if (state.user && (state.user.email || state.user.email == null)) {
        state.user.email = email;
        state.user.validated_at = null;
        this._vm.$storage.user.setItem('currentUser', state.user);
      }
    },
    avatar(state, url) {
      console.log('5');
      if (state.user) {
        state.user.avatar_url = url;
        this._vm.$storage.user.setItem('currentUser', state.user);
      }
    },
    reset(state) {
      console.log('6');
      state.user = null;
      state.sites = null;
      this._vm.$storage.user.removeItem('currentUser');
    },
  },
  actions: {
    async initialize({ state }, force) {
      console.log('7', state);
      if (!state.user || force) {
        state.user = await this._vm.$storage.user.getItem('currentUser');
      }
    },
    async fetch({ commit }) {
      // const [userRes] = await Promise.all([axios.get('/web/user/info/')]);
      // console.log(userRes.data);
      commit('fetch', {
        user: {
          name: 'cherry',
          mobile: '17600825312',
          email: '936430210@qq.com',
          avatar: '',
        },
      });
    },
    name({ commit }, name) {
      console.log('8');
      commit('name', name);
    },
    mobile({ commit }, mobile) {
      console.log('9');
      commit('mobile', mobile);
    },
    email({ commit }, email) {
      console.log('10');
      commit('email', email);
    },
    avatar({ commit }, url) {
      console.log('11');
      commit('avatar', url);
    },
  },
  getters: {
    info: state => {
      console.log('state', state);
      return state.user;
    },
    id: state => {
      console.log('12');
      if (state.user && state.user.id) {
        return state.user.id;
      }
      return null;
    },
    avatar: (state, getters) => (getters.info ? getters.info.avatar_url : null),
    user: state => state.user,
  },
};
