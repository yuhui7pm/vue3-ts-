import { createApp } from "vue";   //创建app实例
import Message from './Message.vue';

const createMsg = (message: string, type: string, timeout = 2000) =>{
    const messageInstance = createApp(Message, {
        type,
        message
    });

    // 挂载节点
    const div = document.createElement('div');
    div.id = "message";
    document.body.appendChild(div);
    messageInstance.mount(div);

    // 2秒后卸载节点
    setTimeout(() => {
        messageInstance.unmount(div);
        document.body.removeChild(div);
    }, timeout)
}

export default createMsg;