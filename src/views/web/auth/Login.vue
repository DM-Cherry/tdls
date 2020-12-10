<template>
  <div class="container">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: '登录页面',
    };
  },
  methods: {
    test() {
      console.log('测试commit成功啦222 ');
    },
  },
};
</script>

<style lang="scss" scoped></style>
