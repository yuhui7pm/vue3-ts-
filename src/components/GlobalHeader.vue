<template>
  <nav class="navbar navbar-dark bg-primary mb-4">
    <a href="#" class="w-75 navbar mx-auto fs-4 text-light">知乎专栏</a>
    <form class="d-flex list-inline mb-0 mx-auto">
      <div v-if="!loginInfo.isLogin">
        <router-link to="/login" class="btn btn-outline-light my-2" type="submit">登陆</router-link>
        <button class="btn btn-outline-light my-2" type="submit">注册</button>
      </div>
      <drop-down v-else :admin="'你好!' + (loginInfo.name || '作者')">
        <drop-down-item>新建文章</drop-down-item>
        <drop-down-item disabled>我的专栏</drop-down-item>
        <drop-down-item disabled>编辑资料</drop-down-item>
        <drop-down-item>退出登录</drop-down-item>
      </drop-down>
    </form>
  </nav>
</template>

<script lang="ts">
import { PropType } from "vue";
import DropDown from "../base/DropDown.vue";
import DropDownItem from "../base/DropDownItem.vue";

export interface LoginInfoProps {
  hasLogin: boolean;
  name?: string;
  id?: number;
}
export default {
  name: "GlobalHeader",
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    loginInfo: {
      type: Object as PropType<LoginInfoProps>,
      required: true
    }
  }
};
</script>