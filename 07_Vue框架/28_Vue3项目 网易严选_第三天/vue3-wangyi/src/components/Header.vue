<template>
  <div class="header w">
    <!-- 上面区域 -->
    <div class="header-top">
      <!-- logo -->
      <h1 class="logo">
        <router-link to="/"></router-link>
      </h1>

      <!-- 搜索-->
      <div class="center">
        <div class="center-seacher">
          <input type="text" />
          <div class="search-btn">搜 索</div>
        </div>
        <!-- 搜索下面的导航 -->
        <ul class="center-navs">
          <li>
            <a href="##">美食</a>
          </li>
          <li>
            <a href="##">餐厨</a>
          </li>
          <li>
            <a href="##">艺术</a>
          </li>
          <li>
            <a href="##">电器</a>
          </li>
          <li>
            <a href="##">居家</a>
          </li>
          <li>
            <a href="##">洗护</a>
          </li>
          <li>
            <a href="##">洗护</a>
          </li>
          <li>
            <a href="##">服装</a>
          </li>
          <li>
            <a href="##">服装</a>
          </li>
        </ul>
      </div>

      <!--购物车 -->
      <div class="cart">
        <a href="##">
          <i class="iconfont icon-cart"></i>
          购物车
          <em>2</em>
        </a>
      </div>
    </div>

    <!-- 二级路由导航栏 -->
    <HeaderNav/>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
export default {
  components: {
    HeaderNav
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 120px;
  padding: 25px 0 0 0;
  .header-top {
    display: flex;
    .logo {
      width: 330px;
      height: 60px;
      a {
        display: inline-block;
        width: 100%;
        height: 60px;
        background: url("../assets/images/logo.webp") 0 -298px no-repeat;
      }
    }
    .center {
      flex: 1;
      .center-seacher {
        width: 540px;
        height: 35px;
        input {
          width: 440px;
          height: 35px;
          padding-left: 15px;
          box-sizing: border-box;
          border-radius: 20px 0 0 20px;
          border: 1px solid @primaryColor;
          color: #333;
          font-size: 15px;
        }
        .search-btn {
          float: right;
          width: 100px;
          height: 35px;
          line-height: 35px;
          border-radius: 0 20px 20px 0;
          background-color: @primaryColor;
          color: #fff;
          font-size: 16px;
          text-align: center;
        }
      }
      //   搜索下面的导航
      .center-navs {
        width: 540px;
        margin-top: 2px;
        li {
          float: left;
          height: 32px;
          line-height: 30px;
          padding: 0 5px;
          a {
            padding: 0 5px;
            border-right: 1px solid #ccc;
            &:hover {
              color: @primaryColor;
            }
          }
        }
        li:last-child a {
          border-right: 0;
        }
      }
    }

    //   购物车
    .cart {
      width: 150px;
      height: 35px;
      line-height: 35px;
      border-radius: 20px;
      border: 1px solid @primaryColor;
      text-align: center;

      a {
        color: @primaryColor;
        font-size: 15px;
        i {
          font-size: 18px;
        }
        em {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          border-radius: 50%;
          padding: 0 7px;
          background-color: red;
          color: #fff;
        }
      }
      &:hover {
        background-color: rgb(245, 240, 231);
      }
    }
  }
}
</style>