<template>
  <div>
     <div class="title">中国地图</div>
    <!-- vant 选项卡 -->
    <van-tabs v-model="active" @change="change">
      <van-tab title="现存确诊">
        <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
        <div id="nowMain" style="width: 100%;height:7rem;"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="totalMain" style="width: 100%;height:7rem;"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getMapData } from "@/api";
export default {
  data() {
    return {
      active: 0,
      arr: [] //所有省份
    };
  },
  // 最早发送网络请求的地方
  created() {
    this.getChinaData();
  },
  mounted() {},
  methods: {
    // change	当前激活的标签改变时触发
    change(name, title) {
      if (name === 1) {
        this.$nextTick(() => {
          this.$myCharts.chinaMap("totalMain", this.arr);
        });
      }
    },
    /**
     * 获取全国数据
     */
    getChinaData() {
      getMapData()
        .then(res => {
          console.log(res);
          this.arr = res.data.list;
          let nowArr = []; //现存确诊  [{ name: '内蒙古', value: 200 },{}]
          this.arr.forEach(item => {
            // {name:'',value:''}
            let obj = {};
            obj.name = item.name;
            obj.value = item.econNum;
            nowArr.push(obj);
          });

          // 用了Vant第三方的库，按需引入，不能直接获取第三方库里的DOM元素
          // 延迟加载，等DOM元素加载完成之后，再做相应的逻辑
          this.$nextTick(() => {
            // 显示地图
            //  econNum 现有确诊  data [{ name: '内蒙古', value: 200 },{}]
            this.$myCharts.chinaMap("nowMain", nowArr);
            // this.$myCharts.chinaMap("totalMain");
          });
        })
        .catch(err => {
          // 空地图加载
          this.$myCharts.chinaMap("nowMain", []);
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.title{
    font-size: .34rem;
    padding: .2rem;
    // 父级引用
    &::before{
        content: "";
        display: inline-block;
        width: .1rem;
        height: .35rem;
        background-color: blue;
        vertical-align: middle;
        margin-right: .16rem;
    }
}

#nowMain,#totalMain{
  background-color: #f5f5f5;
}
</style>