<template>
  <div class="signup-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">注册账户</h5>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          type="text"
          placeholder="请输入邮箱地址"
          :rules="emailRules"
          v-model="formData.email"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">昵称</label>
        <validate-input
          type="text"
          placeholder="请输入昵称"
          :rules="nickNameRules"
          v-model="formData.nickName"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="formData.password"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">再次输入密码</label>
        <validate-input
          type="password"
          placeholder="请再次输入密码"
          :rules="repeatPasswordRules"
          v-model="formData.repeatPassword"
        />
        <div class="form-text text-center">
          <a href="/login" class>已经有账户了？去登录</a>
        </div>
      </div>
    </validate-form>
  </div>
</template>

<style scoped>
.w-330 {
  max-width: 330px;
}
.signup-page .mb-3 {
  text-align: left;
}
.signup-page .btn-block {
  width: 100%;
  display: block;
}
</style>


<script lang="ts">
import { defineComponent, reactive } from "vue";
import ValidateForm from "../base/ValidateForm.vue";
import ValidateInput, { RulesProps } from "../base/ValidateInput.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import createMsg from "../base/createMsg";

export default defineComponent({
  name: "Signup",
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const formData = reactive({
      email: "",
      nickName: "",
      password: "",
      repeatPassword: ""
    });

    const emailRules: RulesProps[] = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱校验格式" }
    ];

    const nickNameRules: RulesProps[] = [
      { type: "required", message: "昵称不能为空" }
    ];
    const passwordRules: RulesProps[] = [
      { type: "required", message: "密码不能为空" }
    ];
    const repeatPasswordRules: RulesProps[] = [
      { type: "required", message: "重复密码不能为空" },
      {
        type: "custom",
        validator: () => {
          return formData.password === formData.repeatPassword;
        },
        message: "两次密码不相同"
      }
    ];

    const store = useStore();
    const router = useRouter();
    const onFormSubmit = (res: boolean) => {
      if (!res) {
        return;
      }

      const { email, password, nickName } = formData;
      store
        .dispatch("register", {
          email,
          password,
          nickName
        })
        .then(() => {
          createMsg("注册成功 正在跳转登录页面", "success", 2000);
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        });
    };

    return {
      formData,
      emailRules,
      nickNameRules,
      passwordRules,
      repeatPasswordRules,
      onFormSubmit
    };
  }
});
</script>