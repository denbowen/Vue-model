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
import { Affix as AAffix, DatePicker, Button as AButton } from 'ant-design-vue';
import HelloImage from '@src/component/image/index.vue';

const { RangePicker: ARangePicker } = DatePicker;

export default {
  name: 'index',
  data() {
    return {
      top: 10,
      bottom: 10,
    };
  },
  components: {
    AAffix,
    AButton,
    ARangePicker,
    HelloImage,
  },
};
</script>

<style lang="less" scoped>
.hello {
  .ant-btn-primary {
    color: beige;
  }

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
