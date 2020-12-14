export default {
  methods: {
    async fetchUserInfo() {
      //  await this.$store.dispatch('Common/Auth/login', token);
      await Promise.all([this.$store.dispatch('UserStore/fetch')]);
    },
  },
};
