<template>
  <div class="validate-input-container">
    <input
      v-if="tag==='input'"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.value"
      @blur="validateInput"
      v-bind="$attrs"
    />
    <textarea
      v-else
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.value"
      @blur="validateInput"
      v-bind="$attrs"
    />
    <!-- <component
      :is="tag"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.value"
      @blur="validateInput"
      v-bind="$attrs"
    />-->
    <p v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</p>
  </div>
</template>

<script lang="ts">
import { PropType, reactive, computed, defineComponent, onMounted } from "vue";
import { emitter } from "./ValidateForm.vue";

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export interface RulesProps {
  type: "required" | "email" | "password" | "custom";
  message: string;
  validator?: () => boolean;
}
export type TagType = "input" | "textarea";

export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: Array as PropType<RulesProps[]>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: "input"
    }
  },
  // 禁止 attribute 继承。然后直接在input里面写v-bind:attrs
  inheritAttrs: false,
  setup(props: any, context: any) {
    // 输入框响应式的值
    const inputRef = reactive({
      value: computed({
        get: () => props.modelValue || "",
        set: val => {
          context.emit("update:modelValue", val);
        }
      }),
      error: false,
      message: ""
    });

    const validateInput = () => {
      if (!props.rules) return true;
      const allPassed = props.rules.every((rule: RulesProps) => {
        let isPass = true;
        inputRef.message = rule.message;
        switch (rule.type) {
          case "required":
            isPass = !!inputRef.value.trim();
            break;
          case "email":
            isPass = emailReg.test(inputRef.value);
            break;
          case "password":
            isPass = inputRef.value.trim().length > 8;
            break;
          case "custom":
            isPass = rule.validator ? rule.validator() : true;
          default:
            break;
        }
        return isPass;
      });

      inputRef.error = !allPassed; // 判断是否有错
      return allPassed;
    };

    // 将事件发射出去，其实就是把验证函数发射出去
    onMounted(() => {
      emitter.emit("form-item-created", validateInput);
    });

    return {
      inputRef,
      validateInput
    };
  }
});
</script>