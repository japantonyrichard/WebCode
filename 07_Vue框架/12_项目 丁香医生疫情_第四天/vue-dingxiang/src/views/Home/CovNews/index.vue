<template>
  <div class="contaner">
    <!-- 新闻 -->
    <div class="news">
      <div class="title">
        <img src="@/assets/images/hot.png" alt />
        <a href="##">查看更多 ></a>
      </div>
      <!-- 新闻列表 -->
      <ul class="list">
        <li class="item" v-for="item in news" :key="item.id">
          <span>最新</span>
          {{item.title}}
          <img src="@/assets/images/right.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"]
};
</script>

<style lang="less" scoped>
.contaner {
  padding: 0.2rem;
  .news {
    border-bottom: 1px solid #eee;
    .title {
      font-size: 0.26rem;
      border-left: 0.1rem solid blue;
      padding-left: 0.2rem;
      img {
        width: 1.3rem;
      }
      a {
        float: right;
        color: blue;
      }
    }

    .list {
      .item {
        margin: 0.2rem;
        color: #333;
        span {
          background-color: #ff5555;
          color: #fff;
          border-radius: 0.05rem;
          padding: 0.02rem 0.06rem;
        }
        img {
          width: 0.3rem;
          float: right;
        }
      }
    }
  }
}
</style>