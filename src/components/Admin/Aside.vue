<template>
  <aside class="aside-menu">
    <b-tabs>
      <b-tab>
        <template slot="title">
          <i class="fas fa-user" />
        </template>
        <div class="p-3">
          <h6>个人信息</h6>
          <hr class="transparent mx-3 mt-3" />
          <div class="aside-options px-5">
            <b-img
              v-if="!info || !info.avatar"
              center
              rounded="circle"
              fluid
              src="/static/images/placeholder/avatar.png"
            />
            <b-img v-else center rounded="circle" fluid :src="info.avatar_url" alt="用户头像" />
          </div>
          <hr class="transparent mx-3 my-3" />
          <ul v-if="info" class="info">
            <li>
              姓名：
              <span class="text-muted">{{ info.name || '' }}</span>
            </li>
            <li>
              手机：
              <span class="text-muted">{{ info.mobile || '' }}</span>
            </li>
            <li>
              邮箱：
              <span class="text-muted">{{ info.email || '' }}</span>
            </li>
          </ul>
        </div>
        <hr class="transparent my-3" />
        <div class="aside-options px-3">
          <b-button :block="true" variant="danger" @click="logout">
            <i class="fas fa-sign-out-alt" />
            退出登录
          </b-button>
        </div>
      </b-tab>
    </b-tabs>
  </aside>
</template>

<script>
import EventBus from '@/core/eventbus';
import { mapGetters } from 'vuex';

export default {
  name: 'ZAside',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('UserStore', ['info']),
  },
  methods: {
    logout() {
      EventBus.$emit('account_logout');
    },
  },
};
</script>

<style scoped>
/* 测试 */
.info {
  padding-left: 15px;
  font-size: 90%;
  line-height: 1.8;
  list-style: none;
}
</style>
