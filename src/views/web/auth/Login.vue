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
      msg: '智能设备检测研究',
    };
  },
  methods: {
    test() {
      console.log('哈哈哈哈啦啦啦测试测试');
    },
  },
};
</script>

<style lang="scss" scoped></style>
