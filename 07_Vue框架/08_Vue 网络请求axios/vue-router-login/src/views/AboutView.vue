<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    <compA />
    <hr>
    <compB />
    <hr>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>

import { getBanner } from '@/api/index'
import compA from '../components/compA'
import compB from '../components/compB'

// import axios from 'axios'
export default {
  components: {
    compA,
    compB
  },
  data() {
    return {
      data: []
    };
  },
  // mounted() {
  //   // axios.get('').then(res => {
  //   //   console.log(res);
  //   // }).catch(err => {
  //   //   console.log(err);
  //   // })
  //   // main.js  挂载在原型对象上了  不要了
  //   // -------------------------------------------------------------------------------------

  //   // console.log(this);
  //   // // this.$axios.get('http://iwenwiki.com:3002/api/banner').then(res=>{
  //   // this.$axios.get('/foo/api/banner').then(res=>{
  //   //   console.log(res.data);
  //   //   this.data=res.data.data;
  //   // }).catch(err=>{
  //   //   console.log(err);
  //   // });

  //   // =============================================================================================

  //   // 第一种写法：
  //   // getBanner().then(res=>{
  //   //   console.log(res);
  //   // }).catch(err=>{
  //   //   console.log(err);
  //   // });
  // },
  // ================================================================================================
  mounted() {
    console.log(this);
    this.getBannerList();
  },
  methods: {
    async getBannerList() {
      try {
        // 第二种写法
        const res = await getBanner();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>