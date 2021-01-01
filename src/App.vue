<template>
  <div class="container">
    <global-header :login-info="loginInfo" />
    <column-list :list="listData" />
    <validate-form ref="validateForm" @form-submit="onFormSubmit">
      <validate-input
        :rules="rules"
        v-model="validateInputValue"
        type="text"
        placeholder="请输入邮箱地址"
      />
      <validate-input
        :rules="passRules"
        v-model="passValidateInputValue"
        type="password"
        placeholder="请输入密码"
      />
      <template #submit>
        <button type="submit" class="btn btn-danger">提交</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { LoginInfoProps } from "./components/GlobalHeader.vue";
import ValidateInput, { RulesProps } from "./base/ValidateInput.vue";
import ValidateForm from "./base/ValidateForm.vue";

const mockdata: ColumnProps[] = [
  {
    id: 1,
    avatar: "https://cdn2.thecatapi.com/images/aeh.jpg",
    description: "描述2",
    title: "标题2"
  },
  {
    id: 2,
    avatar: "https://cdn2.thecatapi.com/images/aeh.jpg",
    description: "描述2",
    title: "标题2"
  },
  {
    id: 3,
    // avatar: "https://cdn2.thecatapi.com/images/aeh.jpg",
    description: "描述2",
    title: "标题2"
  },
  {
    id: 4,
    avatar: "https://cdn2.thecatapi.com/images/aeh.jpg",
    description: "描述2",
    title: "标题2"
  }
];

const loginInfo: LoginInfoProps = {
  hasLogin: true,
  name: "哲哲"
};

const rules: RulesProps[] = [
  {
    type: "required",
    message: "这是必填项"
  },
  {
    type: "email",
    message: "邮箱格式错误"
  }
];

const passRules: RulesProps[] = [
  {
    type: "required",
    message: "这是必填项"
  },
  {
    type: "password",
    message: "密码错误，长度至少8位"
  }
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup() {
    const validateInputValue = ref("");
    const passValidateInputValue = ref("");

    const onFormSubmit = (ans: boolean) => {
      console.log("结果", ans);
    };
    return {
      rules,
      validateInputValue,
      passValidateInputValue,
      passRules,
      listData: mockdata,
      loginInfo: loginInfo,
      onFormSubmit
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
  margin-top: 60px;
}
</style>
