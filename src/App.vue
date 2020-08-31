<template>
  <router-view />
</template>

<script>
const a = 1;

export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(a);
  },
};
</script>

<style lang="less">
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 14px;
}
</style>
