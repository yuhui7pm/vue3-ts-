<template>
  <div class="column-detail-page w-690">
    <div class="column-info row mb-4 border-bottom pb-4" v-if="column">
      <div class="col-3 text-center">
        <img
          :src="column.avatar && column.avatar.url"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="postList"></post-list>
    <button
      v-if="!isLastPage"
      @click="loadMorePage"
      class="btn btn-outline-primary mt-2 mb-5 mx-auto btn-block w-25 load-more"
    >加载更多</button>
  </div>
</template>


<style scoped>
.w-690 {
  width: 690px;
  margin: 0 auto;
}
.load-more {
  margin-left: 50% !important;
  transform: translate3d(-50%, 0, 0);
}
</style>

<script lang="ts">
import { defineComponent, computed, onMounted, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import useLoadMore from "../hooks/useLoadMore";
type ColumnIdProps = string | undefined;

export default defineComponent({
  name: "ColumnDetail",
  components: {
    PostList
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const loaded = reactive({
      currentPage: 0,
      total: 0
    });
    const total = computed(() => loaded.total);
    const currentId = route.params.id as ColumnIdProps;

    const columnId = route.params.id;

    watch(store.state.posts.loadedColumns, () => {
      const { currentPage, total } = store.getters.getLoadedPost(currentId);
      loaded.currentPage = currentPage;
      loaded.total = total;
    });

    onMounted(() => {
      store.dispatch("fetchColumn", currentId);
      store.dispatch("fetchPosts", { columnId: currentId, pageSize: 3 });
    });

    const column = computed(() => {
      return store.getters.getColumnById(columnId);
    });

    const postList = computed(() => {
      return store.getters.getPostsByCid(columnId);
    });

    const params = {
      columnId: currentId,
      pageSize: 6,
      currentPage: loaded.currentPage ? loaded.currentPage + 1 : 2
    };

    const { loadMorePage, isLastPage } = useLoadMore(
      "fetchPosts",
      total,
      params
    );

    return {
      column,
      postList,
      loadMorePage,
      isLastPage
    };
  }
});
</script>
