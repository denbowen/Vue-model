<template>
  <div class="home">
    <div>首页</div>
    <a-button type="primary">点击</a-button>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
    <div>
      <div style="margin-bottom: 16px;">
        showLine:
        <a-switch v-model="showLine" />
        <br />
        <br />
        showIcon:
        <a-switch v-model="showIcon" />
      </div>
      <a-tree
        :show-line="showLine"
        :show-icon="showIcon"
        :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
        @select="onSelect"
      >
        <a-icon slot="icon" type="carry-out" />
        <a-tree-node key="0-0">
          <a-icon slot="icon" type="carry-out" />
          <span slot="title" style="color: #1890ff;">parent 1</span>
          <a-tree-node key="0-0-0" title="parent 1-0">
            <a-icon slot="icon" type="carry-out" />
            <a-tree-node key="0-0-0-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </a-tree-node>
            <a-tree-node key="0-0-0-1" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </a-tree-node>
            <a-tree-node key="0-0-0-2" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </a-tree-node>
          </a-tree-node>
          <a-tree-node key="0-0-1" title="parent 1-1">
            <a-icon slot="icon" type="carry-out" />
            <a-tree-node key="0-0-1-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </a-tree-node>
          </a-tree-node>
          <a-tree-node key="0-0-2" title="parent 1-2">
            <a-icon slot="icon" type="carry-out" />
            <a-tree-node key="0-0-2-0" title="leaf">
              <a-icon slot="icon" type="carry-out" />
            </a-tree-node>
            <a-tree-node key="0-0-2-1" title="leaf">
              <a-icon slot="icon" type="carry-out" />
              <a-icon slot="switcherIcon" type="form" />
            </a-tree-node>
          </a-tree-node>
        </a-tree-node>
      </a-tree>
    </div>
  </div>
</template>

<script>
import {
  Divider as ADivider,
  Table as ATable,
  Switch as ASwitch,
  Tree as ATree,
  Button as AButton,
  Icon as AIcon,
  Tag as ATag,
} from 'ant-design-vue';

const { TreeNode: ATreeNode } = ATree;

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  name: 'index',
  data() {
    return {
      data,
      columns,
      showLine: true,
      showIcon: false,
    };
  },
  components: {
    AButton,
    ADivider,
    ASwitch,
    AIcon,
    ATag,
    ATree,
    ATable,
    ATreeNode,
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  img {
    display: block;
    width: 170px;
    height: auto;
    font-size: 12px;
  }
}
</style>
