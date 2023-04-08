

<template>
  <div class="map">
    <div class="title">世界地图</div>
    <div id="main" style="width:100%;height:7rem"></div>
  </div>
</template>

<script>
import { getMapData } from "@/api";
export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    this.getWorldData();
  },
  methods: {
    // 加载世界地图
    async getWorldData() {
      try {
        const res = await getMapData();
        console.log(res);
        this.$myCharts.worldMap("main", res.data.worldlist);
      } catch (error) {
        // 空地图展示
        this.$myCharts.worldMap("main", []);
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.map {
  padding-top: 0.2rem;
}
.title {
  font-size: 0.34rem;
  padding: 0.2rem;
  // 父级引用
  &::before {
    content: "";
    display: inline-block;
    width: 0.1rem;
    height: 0.35rem;
    background-color: blue;
    vertical-align: middle;
    margin-right: 0.16rem;
  }
}
#main{
  background-color: #f5f5f5;
}
</style>