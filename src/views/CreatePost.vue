<template>
  <div class="create-post-page container">
    <h4>{{ isEditMode ? '编辑' : '新增'}}文章</h4>
    <uploader
      action="/api/upload"
      :uploaded="uploadedData"
      :before-upload="uploadCheck"
      @file-uploaded-success="onFileUploadedSuccess"
      class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
    >
      <h2>点击上传头图</h2>
      <template #loading>
        <div class="d-flex">
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <h2>正在上传</h2>
        </div>
      </template>
      <template #uploaded="dataProps">
        <div class="uploaded-area">
          <img :src="dataProps.uploadedData.data.url" />
          <h3>点击重新上传</h3>
        </div>
      </template>
    </uploader>
    <validate-form @form-submit="onFormSubmit" class="text-start">
      <div>
        <div class="mb-3">
          <label class="form-label">文章标题：</label>
          <validate-input :rules="titleRules" v-model="titleVal" placeholder="请输入文章标题" type="text" />
        </div>
        <div class="mb-3">
          <label class="form-label">文章详情：</label>
          <validate-input
            rows="10"
            tag="textarea"
            placeholder="请输入文章详情"
            :rules="contentRules"
            v-model="contentVal"
          />
        </div>
      </div>
      <template v-slot:submit>
        <button class="btn btn-primary btn-large">{{ isEditMode ? '更新文章' : '发表文章' }}</button>
      </template>
    </validate-form>
  </div>
</template>

<style>
.create-post-page {
  max-width: 700px;
}
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>


<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import ValidateForm from "../base/ValidateForm.vue";
import ValidateInput, { RulesProps } from "../base/ValidateInput.vue";
import Uploader from "../base/Uploader.vue";
import { beforeUploadCheck } from "../libs/helpers";
import createMessage from "../base/createMsg";
import {
  ResponseType,
  ImageProps,
  GlobalDataProps,
  PostProps
} from "../store/types";

export default defineComponent({
  name: "create",
  components: {
    ValidateForm,
    ValidateInput,
    Uploader
  },
  setup() {
    let imageId = "";
    const router = useRouter();
    const route = useRoute();
    const store = useStore<GlobalDataProps>();

    const queryId = route.query.id;
    const isEditMode = !!queryId;

    const titleVal = ref("");
    const titleRules: RulesProps[] = [
      { type: "required", message: "文章标题不能为空" }
    ];
    const contentVal = ref("");
    const contentRules: RulesProps[] = [
      { type: "required", message: "文章详情不能为空" }
    ];
    const uploadedData = ref();

    // 编辑的时候，获取编辑的内容
    // 有一个缺陷：刷新页面，编辑的数据会没有，懒得改了，有时间再改
    onMounted(() => {
      if (isEditMode) {
        store
          .dispatch("fetchPost", queryId)
          .then((rawData: ResponseType<PostProps>) => {
            const currentPost = rawData.data;
            const { image, title, content } = currentPost;
            titleVal.value = title;
            contentVal.value = content || "";
            if (image) {
              uploadedData.value = {
                data: image
              };
            }
          });
      }
    });

    // 校验文件格式
    const uploadCheck = (file: File) => {
      const validate = beforeUploadCheck(file, {
        format: ["image/jpeg", "image/png"],
        size: 1
      });

      const { passed, error } = validate;
      if (error === "format") {
        createMessage("上传图片只能是 JPG/PNG 格式!", "error");
      }
      if (error === "size") {
        createMessage("上传图片大小不能超过 1Mb!", "error");
      }
      return passed;
    };

    // 图片上传成功之后，要得到上传到服务器的ID
    const onFileUploadedSuccess = (resData: ResponseType<ImageProps>) => {
      if (resData.data._id) {
        imageId = resData.data._id;
      }
    };

    // 提交数据，发送请求
    const onFormSubmit = (res: boolean) => {
      if (!res) {
        return;
      }
      const { column, _id } = store.state.user; // 用户ID和用户所属专栏，默认都会有的
      if (column) {
        const params: PostProps = {
          title: titleVal.value,
          content: contentVal.value,
          column,
          author: _id,
          image: imageId
        };

        const actionName = isEditMode ? "updatePost" : "createPost";
        const sendData = isEditMode
          ? {
              id: queryId,
              params
            }
          : params;

        store.dispatch(actionName, sendData).then(() => {
          createMessage(
            "文章发表成功，2秒后自动跳转到用户所在专栏",
            "success",
            1000
          );
          setTimeout(() => {
            router.push({ name: "column", params: { id: column } });
          }, 2000);
        });
      }
    };

    return {
      isEditMode,
      titleVal,
      contentVal,
      titleRules,
      contentRules,
      uploadCheck,
      onFormSubmit,

      onFileUploadedSuccess,
      uploadedData
    };
  }
});
</script>