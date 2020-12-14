<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler mobile-sidebar-toggler d-lg-none"
      type="button"
      @click="mobileSidebarToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <b-link class="navbar-brand" to="#" />
    <button
      v-if="sidebarMinimizer"
      class="navbar-toggler sidebar-minimizer d-md-down-none h-100 b-r-1"
      type="button"
      @click="sidebarMinimize"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <b-navbar-nav class="ml-2"></b-navbar-nav>
    <b-navbar-nav class="ml-auto"></b-navbar-nav>
    <button
      class="navbar-toggler aside-menu-toggler d-md-down-none"
      type="button"
      @click="asideToggle"
    >
      <span class="navbar-toggler-icon" />
    </button>
  </header>
</template>

<script>
export default {
  name: 'ZAdminHeader',
  props: {
    sidebarMinimizer: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    sidebarMinimize() {
      // 先判断当前侧边导航栏的状态
      // 当body中有sidebar-hidden的时候，导航条彻底被隐藏
      // 当body中有sidebar-minimized的时候，导航条被折叠
      window.dispatchEvent(new Event('resize'));
      if (
        document.body.classList.contains('sidebar-hidden') ||
        document.body.classList.contains('sidebar-minimized')
      ) {
        document.body.classList.remove('sidebar-hidden', 'sidebar-minimized', 'brand-minimized');
      } else {
        document.body.classList.remove('sidebar-hidden');
        document.body.classList.add('sidebar-minimized', 'brand-minimized');
      }
    },
    mobileSidebarToggle(e) {
      e.preventDefault();
      window.dispatchEvent(new Event('resize'));
      document.body.classList.toggle('sidebar-mobile-show');
    },
    async asideToggle(e) {
      e.preventDefault();
      // await this.$store.dispatch('UserStore/initialize', true)
      window.dispatchEvent(new Event('resize'));
      document.body.classList.toggle('aside-menu-hidden');
    },
  },
};
</script>

<style lang="scss" scoped></style>
