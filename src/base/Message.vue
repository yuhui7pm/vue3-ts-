<template>
    <teleport to="#message">
        <div
            v-if="isVisible"
            class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
            :class="classObject"
        >
            <span>{{ message }}</span>
            <button type="button" class="close btn-close" aria-label="Close" @click.prevent="hide">
                <!-- <span aria-hidden="true">&times;</span> -->
            </button>
        </div>
    </teleport>
</template>
<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import { MessageType } from '../store/types'

export default defineComponent({
    name: 'Message',
    props: {
        message: String,
        type: {
            type: String as PropType<MessageType>,
            default: 'deafult'
        }
    },

    setup(props, {emit}) {
        const isVisible = ref(true);
        const classObject = {
            'alert-success': props.type === 'success',
            'alert-danger': props.type === 'error',
            'alert-primary': props.type === 'default'
        }
        const hide = (() => {
            isVisible.value = false;
            emit('close-message', true);
        });

        return {
            isVisible,
            hide,
            classObject
        }
    }
})
</script>