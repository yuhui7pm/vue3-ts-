import { onMounted, onUnmounted, Ref, ref } from "vue";

const userClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const hideSelect = ref(true);

    const clickEvent = (e: MouseEvent) => {
        if (elementRef.value) {

            // 如果是点击的外面区域，就隐藏下拉框
            if (elementRef.value.contains(e.target as HTMLElement)) {
                hideSelect.value = true;
            } else {
                hideSelect.value = false;                
            }
        }
    };

    onMounted(() => {
        document.addEventListener('click', clickEvent);
    });

    onUnmounted(() => {
        document.removeEventListener('click', clickEvent);
    });

    return {
        hideSelect
    }
};

export default userClickOutside;