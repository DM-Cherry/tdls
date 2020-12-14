/* eslint-disable no-nested-ternary */
import ability from '@/core/mixins/ability';

export default {
  mixins: [ability],
  async created() {
    // await this.onRouteChange();
  },
  watch: {
    $route() {
      // this.onRouteChange();
    },
  },
  methods: {
    async onRouteChange() {
      // 获取权限
      const requests = [this.$axios.get(`/web/user/permission/`)];
      await Promise.all(requests)
        .then(async ([permissions]) => {
          this.$store.commit('SiteStore/permissions', permissions.data);
          this.nav = this.$store.getters['SiteStore/menuitems'];
          this.ready = true;
        })
        .catch(e => {
          // eslint-disable-next-line no-console
          console.error(e);
          this.$swal({
            title: '基础数据载入错误',
            html:
              typeof e === 'string' ? e : typeof e.data === 'string' ? e.data : JSON.stringify(e),
            type: 'error',
            confirmButtonText: '知道了',
          });
        });
    },
  },
};
