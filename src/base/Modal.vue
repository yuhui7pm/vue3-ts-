<template>
  <teleport to="#modal">
    <div class="modal d-block" tabindex="-1" role="dialog" v-if="visible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="onConfirm">确定</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onClose">取消</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useDOMCreate from "../hooks/useDomCreate";

export default defineComponent({
  name: "Modal",
  props: {
    title: String,
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["modal-on-close", "modal-on-confirm"],
  setup(props, { emit }) {
    useDOMCreate("modal");

    const onClose = () => {
      emit("modal-on-close");
    };

    const onConfirm = () => {
      emit("modal-on-confirm");
    };

    return {
      onClose,
      onConfirm
    };
  }
});
</script>