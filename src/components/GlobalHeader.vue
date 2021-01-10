<template>
  <nav class="navbar navbar-dark bg-primary mb-4">
    <router-link to="/" class="w-75 navbar mx-auto fs-4 text-light">知乎专栏</router-link>
    <form class="d-flex list-inline mb-0 mx-auto">
      <div v-if="!loginInfo.isLogin">
        <router-link to="/login" class="btn btn-outline-light my-2 me-2" type="submit">登陆</router-link>
        <router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link>
      </div>
      <drop-down v-else :admin="'你好!' + (loginInfo.nickName || '作者')">
        <drop-down-item>
          <router-link to="/create">新建文章</router-link>
        </drop-down-item>
        <drop-down-item disabled>我的专栏</drop-down-item>
        <drop-down-item disabled>编辑资料</drop-down-item>
        <drop-down-item>
          <span href="#" @click.prevent="handleLogout">退出登录</span>
        </drop-down-item>
      </drop-down>
    </form>
  </nav>
</template>

<script lang="ts">
import { PropType } from "vue";
import DropDown from "../base/DropDown.vue";
import DropDownItem from "../base/DropDownItem.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { LoginInfoProps, GlobalDataProps } from "../store/types";

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
  },

  setup() {
    const store = useStore<GlobalDataProps>();
    const router = useRouter();

    const handleLogout = () => {
      console.log("handleLogout");
      store.commit("logout");
      router.push({ name: "home" });
    };

    return {
      handleLogout
    };
  }
};
</script>