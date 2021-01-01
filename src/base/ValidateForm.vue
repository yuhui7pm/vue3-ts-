<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt, { Emitter } from "mitt";
type ValidateFunc = () => boolean;

export const emitter: Emitter = mitt(); // 使用了slot，用于父子组件的通信

export default defineComponent({
  name: "ValidateForm",
  emits: ["form-submit"],
  setup(props: any, { emit }) {
    let validateArr: ValidateFunc[] = [];

    const callback = (validate?: ValidateFunc) => {
      validate && validateArr.push(validate);
    };
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      validateArr = [];
    });

    const submitForm = () => {
      emit(
        "form-submit",
        validateArr.map(validateFunc => validateFunc()).every(ans => ans)
      );
    };
    return {
      submitForm
    };
  }
});
</script>