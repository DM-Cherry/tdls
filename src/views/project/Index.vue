<template>
  <div class="app">
    <AppHeader />
    <div class="app-body">
      <Sidebar :nav-items="nav" />
      <main class="main">
        <router-view :key="$route.fullPath" />
      </main>
      <AppAside />
    </div>
  </div>
</template>

<script>
import { Header as AppHeader, Aside as AppAside, Sidebar } from '@/components/Admin/';
import admin from '@/core/mixins/admin';

export default {
  name: 'Project',
  components: { AppHeader, AppAside, Sidebar },
  mixins: [admin],
  data() {
    return {
      nav: [
        {
          id: 1,
          route_name: 'dashboard',
          name: '仪表盘',
          module: '',
          icon: 'fa fa-tachometer',
          children: [],
          attributes: {
            target: '/dashboard',
          },
        },
        {
          id: 2,
          route_name: 'permission',
          name: '权限管理',
          module: '',
          icon: 'fa fa-sitemap',
          children: [],
          attributes: {
            target: '/',
          },
        },
        {
          id: 3,
          route_name: 'user',
          name: '用户管理',
          module: '',
          icon: 'fa fa-user-circle',
          children: [],
          attributes: {
            target: '/',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #f7f7f7;
}
[role='main'] {
  margin-top: 3rem;
}
</style>
