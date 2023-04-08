<template>
  <div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 6rem;height:7rem;"></div>
  </div>
</template>

<script>
// 2、引入
// import echarts from "echarts";
export default {
  mounted() {
    console.log(this);
    this.getEcharts();
  },
  methods: {
    getEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts",
          textStyle:{
            color:"red"
          }
        },
        // 提示框
        tooltip: {
            formatter:"哈哈哈哈"
        },
        // 图例
        legend: {
          data: ["销量","利润"]
        },
        // x轴
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [50, 20, 36, 10, 10, 20]
          },{
            name: "利润",
            type: "bar",
            data: [5, 40, 60, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
</style>