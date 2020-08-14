<template>
  <div class="hello">
    <div>hello页面</div>
    <div>hello world</div>
    <hello-image />
    <a-affix :offset-top="top">
      <a-button type="primary" @click="top += 10">
        Affix top
      </a-button>
    </a-affix>
    <a-range-picker />
  </div>
</template>

<script>
import { Affix, DatePicker, Button as AButton } from 'ant-design-vue';
import HelloImage from '@src/component/image/index.vue';

const { RangePicker: ARangePicker } = DatePicker;

export default {
  name: 'index',
  components: {
    Affix,
    AButton,
    ARangePicker,
    HelloImage,
  },
};
</script>

<style lang="less" scoped>
.hello {
  > div:first-child {
    font-size: 24px;
    font-weight: bold;
  }

  > div:last-child {
    font-size: 14px;
    color: aqua;
  }
}
</style>
