<template>
  <div id="app">
    <!-- <VModel /> -->
    <!-- <SyncParent/> -->
    <!-- <AttrsParent/> -->
    <!-- <DataReactive/> -->
    <!-- <Array/> -->
    <CompA />
    <hr>
    <CompB/>
  </div>
</template>

<script>
// 2、引入局部组件
import VModel from "./components/01.VModel/VModel.vue";
import SyncParent from "./components/02.Sync/SyncParent.vue";
import AttrsParent from "./components/03.AttrsListenter/AttrsParent.vue";
import DataReactive from "./components/04.DataReactive/DataReactive.vue";
import Array from "./components/06.Array/Array.vue";
import CompA from "./components/07.Mixin/CompA.vue";
import CompB from "./components/07.Mixin/CompB.vue";

export default {
  name: "App",
  // 3、注册组件
  components: {
    VModel,
    SyncParent,
    AttrsParent,
    DataReactive,
    Array,
    CompA,
    CompB
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style lang="less">
h2 {
  color: red;
}
</style>
