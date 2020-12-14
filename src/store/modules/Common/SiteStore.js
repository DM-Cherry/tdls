export default {
  namespaced: true,
  state: {
    permissions: [],
  },
  mutations: {
    permissions(state, permissions) {
      state.permissions = permissions;
      this._vm.$storage.user.setItem('permissions', state.permissions);
    },
    reset(state) {
      state.permissions = null;
      this._vm.$storage.user.removeItem('permissions');
    },
  },
  getters: {
    permissions: state => {
      return state.permissions;
    },
  },
};
