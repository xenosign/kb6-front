<template>
  <div>
    <slot v-bind:msg="data1"></slot>
    <slot name="named" v-bind:msg="data2"></slot>
  </div>
</template>

<script>
export default {
  name: 'ScopedSlotChild',
  data() {
    return {
      data1:
        '과연 나는 어떤 태그에 들어갈까? 와아아아아 너어어어어무 궁금하다 😜',
      data2: '그럼 나는!? 😋',
    };
  },
};
</script>
