<template>
  <div class="dropdown" ref="dropDown">
    <a
      class="btn btn-outline-light dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click.prevent="toggleSelect"
    >{{ admin }}</a>
    <div
      class="dropdown-menu"
      aria-labelledby="dropdownMenuLink"
      style="display: block"
      v-if="isOpen"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import userClickOutside from "../hooks/userClickOutside";

export default {
  name: "DropDown",
  props: {
    admin: {
      type: String,
      required: true
    }
  },
  setup() {
    const dropDown = ref<null | HTMLElement>(null); // 定义dropDown的dom节点名称。不需要动态绑定这个

    const isOpen = ref(false);
    const toggleSelect = () => {
      isOpen.value = !isOpen.value;
    };

    // 通过写hook的形式来判断点击
    const { hideSelect } = userClickOutside(dropDown);
    watch(hideSelect, () => {
      isOpen.value = isOpen.value && hideSelect.value;
    });

    return {
      isOpen,
      toggleSelect,
      dropDown
    };
  }
};
</script>