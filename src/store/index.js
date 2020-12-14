import Vue from 'vue';
import Vuex from 'vuex';
import defaultState from './ config';
import UserStore from './modules/Common/UserStore';

Vue.use(Vuex);
const store = {
  state: defaultState,
  modules: {
    UserStore,
  },
};
const state = new Vuex.Store(store);

export default state;
