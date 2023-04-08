

<template>
  <div>
    <div>province----{{name}}</div>
    <div id="main" style="width:100%;height:7rem"></div>
  </div>
</template>

<script>
import { getMapData } from "@/api";
export default {
  //动态路由拿参数:第二种方式：
  props: ["name"],
  mounted() {
    // 动态路由拿参数:第一种方式：
    console.log(this.$route.params.name);

    this.getProvinceData();
  },
  methods: {
    // 获取省的数据
    async getProvinceData() {
      try {
        const res = await getMapData();
        console.log(res.data.list);
        // 国内所有省数据
        let provinces = res.data.list;
        // 从全部省的数组中找到当前省数据对象
        let province = provinces.find(item => {
          return item.name == this.name;
        });
        console.log("当前省数据对象：", province);
        let arr = []; //来存放重组数据 [{name:'',value:''},{}]
        province.city.map(item => {
          let obj = {};
          obj.name = item.name;
          obj.value = item.conNum;
          arr.push(obj);
        });

        // 渲染地图
        this.$myCharts.provinceMap("main", this.name, arr);
      } catch (error) {
        // 空地图展示
        this.$myCharts.provinceMap("main", this.name, []);
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>