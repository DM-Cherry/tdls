// import iView from 'iview'
import ViewUI from 'view-design';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import web from './modules/web';
// import admin from "./modules/admin";
// import manage from "./modules/manage";
// import root from "./modules/root";
// import personal from "./modules/personal";
// import hospital from "./modules/hospital";
// import project from "./modules/project";
// import asset from "./modules/asset";
// import provider from "./modules/provider";

Vue.use(VueRouter);
// Vue.use(iView)
// import cms from "./modules/cms";

Vue.use(ViewUI);

const routes = [].concat(web);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  // 修改如果打开的菜单有标题，则修改标题
  document.title = to.meta.name ? `${store.state.name} -- ${to.meta.name}` : store.state.name;

  if (to.matched.some(r => r.meta.requireAuth)) {
    if (localStorage.getItem('jwtToken')) {
      next();
    } else {
      next({
        name: 'auth.login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
