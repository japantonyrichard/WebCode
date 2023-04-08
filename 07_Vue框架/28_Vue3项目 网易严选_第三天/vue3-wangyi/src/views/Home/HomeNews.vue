

<template>
  <div class="home-news">
    <Panel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <template #right>
        <AppMore />
      </template>
      <!-- 列表布局 -->
      <ul v-if="goodsList.length>0" class="gooos-list">
        <li class="item" v-for="item in goodsList" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" alt />
            <div class="title ellipsis">{{item.name}}</div>
            <div class="price">
              ￥{{item.retailPrice}}
              <del>￥{{item.counterPrice}}</del>
            </div>
          </router-link>
        </li>
      </ul>
      <!-- 自己的骨架屏 -->
      <HomeNewSkeleton v-else />
      <!-- <div v-else class="gooos-list">
        <el-skeleton class="item" v-for="item in 4" :key="item">
          <template #template>
            <el-skeleton-item variant="image" style="width: 265px; height: 265px" />
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 70%" />
              <br />
              <el-skeleton-item variant="p" style="width: 30%" />
            </div>
          </template>
        </el-skeleton>
      </div> -->
    </Panel>
  </div>
</template>

<script>
import { ref } from "vue";
import Panel from "../../components/Panel.vue";
import { getNewsList } from "../../api/index";
import HomeNewSkeleton  from '../../skeleton/HomeNewSkeleton.vue'
export default {
  components: {
    Panel,
    HomeNewSkeleton
  },
  setup(props) {
    // 定义变量
    let goodsList = ref([]);
    // 获取新鲜好物
    const getNews = async () => {
      try {
        const res = await getNewsList();
        console.log(res);
        if (res.code == "200") {
          goodsList.value = res.data.result.slice(0, 4);
        }
      } catch (error) {
        console.log(error);
      }
    };
    // 调用
    getNews();

    return { goodsList };
  }
};
</script>

<style lang="less" scoped>
.home-news {
  .gooos-list {
    display: flex;
    justify-content: space-between;
    .item {
      width: 265px;
      height: 365px;
      background-color: #f5f5f5;
      .hoverShadow ();
      img {
        width: 265px;
        height: 265px;
      }
      .title {
        font-size: 20px;
        padding: 15px 25px;
        text-align: center;
      }
      .price {
        text-align: center;
        font-size: 15px;
        color: @priceColor;
        del {
          color: #ccc;
        }
      }
    }
  }
}
</style>