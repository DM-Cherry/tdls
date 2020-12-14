<template>
  <div class="sidebar d-print-none">
    <nav class="sidebar-nav" v-if="menuReady">
      <ul class="nav">
        <template v-for="item in navItems">
          <z-sidebar-menuitem :key="item.route_name" :item="item" :level="0" />
        </template>
      </ul>
      <slot />
    </nav>
    <Spin v-else fix>
      <Icon type="load-c" size="18" class="demo-spin-icon-load" />
      <div>菜单加载中...</div>
    </Spin>
    <!-- <button class="sidebar-minimizer" type="button" @click="sidebarToggle" /> -->
  </div>
</template>

<script>
import ZSidebarMenuitem from '@/components/Admin/Sidebar/SidebarMenuitem';

export default {
  name: 'ZSidebar',
  components: {
    ZSidebarMenuitem,
  },
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => [],
    },
    menuReady: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    sidebarToggle() {
      window.dispatchEvent(new Event('resize'));
      // 当导航条没有被隐藏的时候，没有sidebar-hidden类的时候
      if (document.body.classList.contains('sidebar-hidden')) {
        // 显示导航条
        document.body.classList.remove('sidebar-minimized', 'sidebar-hidden', 'brand-minimized');
      } else {
        // 隐藏导航条
        document.body.classList.remove('sidebar-minimized');
        document.body.classList.add('sidebar-hidden', 'brand-minimized');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
