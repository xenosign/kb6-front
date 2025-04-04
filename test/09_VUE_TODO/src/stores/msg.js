import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useMsgStore = defineStore('message', () => {
  const msg = ref('이건 기본 메세지 입니다');
  function editMsg(newMsg) {
    msg.value = newMsg;
  }

  return { msg, editMsg };
});
