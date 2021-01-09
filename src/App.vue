<template>
  <div>
    <global-header :login-info="currentUser" />
    <router-view></router-view>
  </div>
  <footer class="text-center py-4 text-secondary bg-light mt-auto">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">© 2020 者也专栏</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalHeader from "./components/GlobalHeader.vue";
// import LoginInfoProps from "./store/index";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader
  },
  setup() {
    const store = useStore();
    const validateInputValue = ref("");
    const passValidateInputValue = ref("");
    const currentUser = computed(() => {
      return store.getters.getCurrentUser;
    });

    return {
      validateInputValue,
      passValidateInputValue,
      currentUser
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
