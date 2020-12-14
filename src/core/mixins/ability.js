/* eslint-disable prefer-rest-params */
export default {
  method: {
    ability() {
      const args = [...arguments];
      const permissions = this.$store.getters['SiteStore/permissions'];
      if (!permissions) {
        return false;
      }
      const result = args.filter(permission => permissions.includes(permission));
      return result.length > 0;
    },
  },
};
