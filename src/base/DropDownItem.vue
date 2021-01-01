<template>
  <a href="#" class="dropdown-item is-disabled" :class="{'disabled': disabled}">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "DropDownItem",
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  }
};
</script>