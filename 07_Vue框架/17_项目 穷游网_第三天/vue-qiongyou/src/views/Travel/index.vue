<template>
  <div class="travel">
    <div class="wrap">
      <img src="@/assets/images/banner.jpg" width="100%" alt />
      <!-- 搜索框 -->
      <div class="search">
        <!-- 
            value / v-model	绑定值	string / number
            fetch-suggestions	返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它	Function(queryString, callback)

            select	点击选中建议项时触发	选中建议项

        -->
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          @select="handleSelect"
          class="search-inp"
        >
          <template slot-scope="{ item }">
            <span class="name">{{ item.cn_name }}</span>
            <span class="addr">{{ item.en_name }}</span>
          </template>
        </el-autocomplete>
        <el-button class="search-btn">搜索</el-button>
      </div>
    </div>

    <!-- 推荐 -->
    <recommend />
  </div>
</template>

<script>
import { getSearch } from "@/api";
import recommend from "./recommend.vue";
export default {
  components: {
    recommend
  },
  data() {
    return {
      state: ""
    };
  },
  methods: {
    // 模糊搜索
    async querySearchAsync(keyword, cb) {
      if (keyword == "") return;
      // 发网络请求
      try {
        const res = await getSearch({ keyword });
        console.log(res);
        if (res.result == "ok" && res.data.list.length > 0) {
          cb(res.data.list);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // 点击选中建议项时触发	选中建议项
    handleSelect(item) {
      //   console.log(item);
      this.state = item.cn_name;
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.travel {
  .wrap {
    position: relative;
    .search {
      position: absolute;
      z-index: 999;
      left: 50%;
      top: 50%;
      // 小盒子在大盒子里水平垂直居中
      transform: translate(-50%, -50%);
      width: 600px;
      height: 70px;
      border-radius: 6px;
      background-image: linear-gradient(
        90deg,
        rgba(83, 144, 250, 0.8),
        rgba(95, 126, 248, 0.8)
      );
      display: flex;
      // 设置侧轴上的子元素的排列方式 （当行）
      align-items: center;
      // 主轴上元素的排列方式  space-around 平均分配剩余空间
      // justify-content: space-around;
      .search-inp {
        flex: 1;
        margin-left: 10px;
      }
      .search-btn {
        width: 100px;
        height: 40px;
        background-color: #d540a0;
        color: #fff;
        font-size: 15px;
        margin: 0 10px;
      }
    }
  }
}
</style>