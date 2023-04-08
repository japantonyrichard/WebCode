<template>
  <div class="num">
    <div class="content">
      <div class="title">截至 {{covData.modifyTime|timer}}全国数据统计</div>
      <!-- currentConfirmedIncr: data.currentConfirmedIncr, //相比昨日现存确诊人数
          currentConfirmedCount: data.currentConfirmedCount, //现存确诊

          suspectedIncr: data.suspectedIncr, //新增境外输入人数
          suspectedCount: data.suspectedCount, //新增境外输入人数

          seriousIncr: data.seriousIncr, //相比昨日现存无症状人数
          seriousCount: data.seriousCount, //现存无症状人数


          confirmedIncr: data.confirmedIncr, //相比昨日累计确诊人数
          confirmedCount: data.confirmedCount, //累计确诊


          deadIncr: data.deadIncr, //相比昨日新增死亡人数
          deadCount: data.deadCount, //累计死亡人数


          curedIncr: data.curedIncr, //相比昨日新增治愈人数
      curedCount: data.curedCount, //累计治愈人数-->
      <ul class="wrap">
        <li class="item">
          <div class="number">
            <span>较昨日</span>
            {{covData.currentConfirmedIncr|number}}
          </div>
          <div class="bold">{{covData.currentConfirmedCount|division}}</div>
          <strong>现存确诊</strong>
        </li>
        <li class="item">
          <div class="number">
            <span>较昨日</span>
            {{covData.suspectedIncr|number}}
          </div>
          <div class="bold">{{covData.suspectedCount|division}}</div>
          <strong>境外输入</strong>
        </li>
        <li class="item">
          <div class="number">
            <span>较昨日</span>
            {{covData.seriousIncr|number}}
          </div>
          <div class="bold">{{covData.seriousCount|division}}</div>
          <strong>现存无症状</strong>
        </li>
        <li class="item">
          <div class="number">
            <span>较昨日</span>
            {{covData.confirmedIncr|number}}
          </div>
          <div class="bold">{{covData.confirmedCount|division}}</div>
          <strong>累计确诊</strong>
        </li>
        <li class="item">
          <div class="number">
            <span>较昨日</span>
            {{covData.deadIncr|number}}
          </div>
          <div class="bold">{{covData.deadCount|division}}</div>
          <strong>累计死亡</strong>
        </li>
        <li class="item">
          <div class="number">
            <span>较昨日</span>
            {{covData.curedIncr|number}}
          </div>
          <div class="bold">{{covData.curedCount|division}}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 导入日期格式化的库
import moment from "moment";
export default {
  props: ["covData"],
  filters: {
    // 数量过滤器
    number: function(val) {
      val = val > 0 ? "+" + val : val;
      if (val == 0) {
        val = "";
      }
      return val;
    },
    // 将数字变成千分位格式:
    division: function(val) {
      if (val == undefined) return "";
      return Object(val).toLocaleString();
    },
    // 时间格式化
    timer: val => {
      if (val == undefined) return "";
      // 第一种方式：字符串拼接 val.getFullYear()
      // 第二种方式：moment.js
      //   return moment(val)
      //     .locale("zh-cn")
      //     .format("YYYY/MM/DD hh:mm:ss");
      // 第三种方式：
      return new Date(val).toLocaleString("chinese", { hour12: false });
    }
  }
};
</script>

<style lang="less" scoped>
.num {
  background-color: #f5f5f5;
  padding-top: 0.3rem;

  .content {
    background-color: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    padding: 0.3rem;
    .title {
      margin-bottom: 0.2rem;
      font-size: 0.3rem;
    }
    .wrap {
      display: flex;
      flex-wrap: wrap; //换行
      padding: 0.1rem;
      box-shadow: 0 0 0.1rem 0.1rem rgba(154, 152, 152, 0.2);
      .item {
        width: 33.3333%;
        text-align: center;
        margin-bottom: 0.15rem;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
        span {
          color: #777;
          font-weight: 700;
        }
        .bold {
          font-size: 0.36rem;
          font-weight: 700;
          margin: 0.05rem 0;
        }
        strong {
          color: #333;
        }
      }
      li:nth-child(1) {
        color: red;
      }
      li:nth-child(2) {
        color: green;
      }
      li:nth-child(3) {
        border-right: 0;
        color: orange;
      }
      li:nth-child(4) {
        color: purple;
      }
      li:nth-child(5) {
        color: rgb(186, 186, 8);
      }
      li:nth-child(6) {
        border-right: 0;
        color: rgb(8, 8, 143);
      }
    }
  }
}
</style>