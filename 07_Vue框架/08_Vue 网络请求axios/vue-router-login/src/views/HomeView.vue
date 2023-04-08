<template>
  <div class="home">
    <h2>Home</h2>
    <ul>
      <li v-for="item in list" :key="item.title">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src


// 2.引入axios
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      list:[], // 轮播图初始数据
    }
  },
  mounted() {
    // 第一种方式：组件内引入，直接使用
    axios.get('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then(res => {
      console.log(res.data);
      // 赋值
      this.list=res.data.banner;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>
