<template>
  <div class="login-page mx-auto p-3 w-330">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input type="text" placeholder="请输入邮箱地址" :rules="emailRules" v-model="emailVal"></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
        ></validate-input>
      </div>
      <template v-slot:submit>
        <button type="submit" class="btn btn-primary btn-block btn-large w-100">登录</button>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ValidateInput, { RulesProps } from "../base/ValidateInput.vue";
import ValidateForm from "../base/ValidateForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const emailVal = ref("");
    const emailRules: RulesProps[] = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];
    const passwordVal = ref("");
    const passwordRules: RulesProps[] = [
      { type: "required", message: "密码不能为空" }
    ];

    const onFormSubmit = (ans: boolean) => {
      if (ans) {
        store.commit("setUserLoginStatus", {
          isLogin: true
        });

        router.push("/");
      }
    };

    return {
      emailVal,
      emailRules,
      passwordVal,
      passwordRules,
      onFormSubmit
    };
  }
});
</script>