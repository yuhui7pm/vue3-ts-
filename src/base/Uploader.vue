<template>
  <div class="file-upload">
    <div v-bind="$attrs" class="file-upload-container" @click.prevent="triggerUpload">
      <slot v-if="fileStatus === 'loading'" name="loading">
        <button class="btn btn-primary" disabled>正在上传</button>
      </slot>
      <slot v-else-if="fileStatus === 'success'" name="uploaded" :uploadedData="uploadedData">
        <button class="btn btn-primary" disabled>上传成功</button>
      </slot>
      <slot v-else name="default">
        <button class="btn btn-primary" disabled>点击上传</button>
      </slot>
    </div>
    <!-- 隐藏掉主要是为了让其他方法触发文件上传事件 -->
    <input type="file" class="file-input d-none" ref="fileInput" @change="handleFileChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from "vue";
import { axios } from "../libs/http";
import { mockUploadPicData } from "../store/testData";
type UploadStatus = "ready" | "loading" | "success" | "error";
type CheckFunction = (file: File) => boolean;

export default defineComponent({
  props: {
    action: {
      type: String,
      required: true
    },
    uploaded: {
      type: Object
    },
    // 上传前校验图片格式是否有误
    beforeUpload: {
      type: Function as PropType<CheckFunction>
    }
  },

  inheritAttrs: false,

  emits: ["file-uploaded-error", "file-uploaded-success"],

  setup(props, { emit }) {
    const fileInput = ref<HTMLInputElement | null>(null);
    const fileStatus = ref<UploadStatus>(props.uploaded ? "success" : "ready");
    const uploadedData = ref(props.uploaded);

    // 用于编辑的时候，显示图片
    watch(
      () => props.uploaded,
      newValue => {
        if (newValue) {
          fileStatus.value = "success";
          uploadedData.value = newValue;
        }
      }
    );

    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click();
      }
    };

    const handleFileChange = (e: Event) => {
      const fileLoaderEle = e.target as HTMLInputElement;

      // 格式如下：
      // lastModified: 1580884039570
      // lastModifiedDate: Wed Feb 05 2020 14:27:19 GMT+0800 (中国标准时间) {}
      // name: "10.jpg"
      // size: 35708
      // type: "image/jpeg"
      // webkitRelativePath: ""
      const pic = fileLoaderEle.files;

      if (pic) {
        const uploadFile = pic[0];
        if (props.beforeUpload) {
          const res = props.beforeUpload(uploadFile);
          if (!res) {
            return;
          }
        }

        fileStatus.value = "loading"; // 上传ing
        const formData = new FormData();
        formData.append("file", uploadFile);

        axios
          .post(props.action, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            fileStatus.value = "success";
            const resData = res.data.code === 0 ? res.data : mockUploadPicData;
            uploadedData.value = resData; // 上传之后，图片在界面上要有预览功能
            emit("file-uploaded-success", resData);
          })
          .catch(error => {
            fileStatus.value = "error";
            emit("file-uploaded-error", { error });
          })
          .finally(() => {
            if (fileInput.value) {
              fileInput.value.value = ""; // 清空
            }
          });
      }
    };
    return {
      fileStatus,
      fileInput,
      triggerUpload,
      handleFileChange,
      uploadedData
    };
  }
});
</script>