<template>
  <div class="row">
    <div v-for="item in articleList" :key="item.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar" style="width:100px" :alt="item.title" />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, computed } from "vue";
export interface ColumnProps {
  id: number;
  avatar?: string;
  description: string;
  title: string;
}
export default {
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },

  setup(props: any) {
    const articleList = computed(() => {
      return props.list.map((item: ColumnProps) => {
        if (!item.avatar) {
          item.avatar = require("@/assets/avatar.jpg");
        }
        return item;
      });
    });

    return {
      articleList
    };
  }
};
</script>