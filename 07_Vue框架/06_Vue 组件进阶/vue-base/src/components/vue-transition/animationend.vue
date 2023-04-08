<template>
    <div>
      <h2>动画</h2>
      <button @click="isShow=!isShow">点击切换</button>
      <transition name="slide">
        <div v-show="isShow" class="box">点击切换点击切换点击切换点击切换点击切换点击切换</div>
      </transition>
      <hr>
      <div class="animated bounceInDown">12312313</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isShow: true
      };
    }
  };
  </script>
  
  <style lang="less" scoped>
  .box1{
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .slide-enter-active {
    animation: bounce-in 1s;
  }
  
  .slide-leave-active {
    animation: bounce-in 1s reverse;
  }
  </style>