<!-- =================== 根组件 ================== -->
<template>
  <div id="app">
    <!-- <DataParent/> -->
    <!-- <List/>
    <hr>
    <News/> -->

    <!-- 生命周期 -->
    <Life/>
  </div>
</template>

<script>
// 2.引入局部组件
import DataParent from './components/vue-data/DataParent.vue'
import List from "./components/vue-slot/List.vue"
import News from "./components/vue-slot/News.vue"
import Life from './components/vue-life/Life.vue'

export default {
  name: 'App',
  // 3.注册组件
  components: {
    DataParent,
    List,
    News,
    Life
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="less">
h2 {
  color: red;
}
</style>
