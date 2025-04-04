import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMsgStore = defineStore('messge', () => {
  const msg = ref('이건 기본 메세지 입니다');

  function editMsg(newMsg) {
    msg.value = newMsg;
  }

  return { msg, editMsg };
});
