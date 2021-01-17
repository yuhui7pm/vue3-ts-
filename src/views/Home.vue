<template>
  <div class="home-page container-md">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <router-link to="/create" class="btn btn-primary my-2">开始写文章</router-link>
          </p>
        </div>
      </div>
    </section>
    <column-list :list="list" />
    <button
      v-if="!isLastPage"
      @click="loadMorePage"
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25 load-more"
    >加载更多</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import ColumnList from "../components/ColumnList.vue";
import { GlobalDataProps } from "../store/types";
import { useStore } from "vuex";
import useLoadMore from "../hooks/useLoadMore";

export default defineComponent({
  name: "Home",
  components: {
    ColumnList
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const currentPage = computed(() => store.state.columns.currentPage);
    const total = computed(() => store.state.columns.total);

    onMounted(() => {
      store.dispatch("fetchColumns", {
        pageSize: 6,
        currentPage: currentPage.value ? currentPage.value + 1 : 2
      });
    });

    const { loadMorePage, isLastPage } = useLoadMore("fetchColumns", total, {
      pageSize: 6,
      currentPage: currentPage.value ? currentPage.value + 1 : 2
    });

    const list = computed(() => {
      return store.getters.getColumns;
    });

    return {
      list,
      loadMorePage,
      isLastPage
    };
  }
});
</script>