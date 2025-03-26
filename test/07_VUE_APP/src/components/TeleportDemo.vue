<template>
  <button @click="teleportTo('orange')">오렌지로</button>
  <button @click="teleportTo('skyblue')">하늘색으로</button>
  <button @click="teleportTo('red')">빨강으로</button>
  <div id="orange"></div>
  <div id="skyblue"></div>
  <div id="red"></div>

  <teleport :to="teleportTarget">
    <h1>나는 어디로 가는가? 뭘 하고 살아야 하나</h1>
  </teleport>
</template>

<script>
export default {
  name: 'Teleport',
  data() {
    return {
      teleportTarget: 'body',
    };
  },
  methods: {
    teleportTo(zone) {
      this.teleportTarget = `#${zone}`;
    },
  },
};
</script>

<style scoped>
div {
  height: 200px;
}

#orange {
  background-color: orange;
}

#skyblue {
  background-color: skyblue;
}
#red {
  background-color: red;
}
</style>
