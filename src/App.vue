<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>
<style lang="less">
@import '../scss/vendors/iview/custom';
// @import '~view-design/src/styles/index';
@import '~view-design/src/styles/custom';
@import '~view-design/src/styles/mixins/index';
@import '~view-design/src/styles/common/index';
@import '~view-design/src/styles/animation/index';
@import '~view-design/src/styles/components/index';
</style>

<style lang="scss">
@import '../scss/vendors/fontawesome/scss/fontawesome';
@import '../scss/vendors/fontawesome/scss/solid';
@import '../scss/vendors/fontawesome/scss/brands';
@import '../scss/vendors/fontawesome/scss/regular';
@import '../scss/vendors/fontawesome/scss/light';

/* Import Bootstrap Vue Styles */
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~froala-editor/css/froala_style';
// Import Main styles for this application
@import './scss/style';
</style>
