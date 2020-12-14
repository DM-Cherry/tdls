<template>
  <div class="container">
    {{ info }}
  </div>
</template>

<script>
import login from '@/core/mixins/login';
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  mixins: [login],
  data() {
    return {
      msg: '登录页面',
    };
  },
  computed: {
    ...mapGetters('UserStore', ['info']),
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    test() {
      console.log('测试commit成功啦222 ');
    },
  },
};
</script>

<style lang="scss" scoped></style>
