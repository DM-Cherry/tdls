// import iView from 'iview'
import ViewUI from 'view-design';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import web from './modules/web';
import project from './modules/project';

Vue.use(VueRouter);
// Vue.use(iView)

Vue.use(ViewUI);

const routes = [].concat(web, project);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  // 修改如果打开的菜单有标题，则修改标题
  document.title = to.meta.name ? `${store.state.name} -- ${to.meta.name}` : store.state.name;
  console.log('to.matched', to.matched);
  if (to.matched.some(r => r.meta.requireAuth)) {
    console.log('1111');
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
    console.log('to.matched', to.matched);
    console.log('2222');
    next();
  }
});

router.afterEach(() => {
  ViewUI.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
