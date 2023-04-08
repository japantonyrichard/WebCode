<template>
  <div class="panel">
    <!-- 头部区域 -->
    <div class="header">
      <h3>
        {{title}}
        <small>{{subTitle}}</small>
      </h3>
      <!-- 右侧插槽 -->
      <slot  name="right"/>
    </div>
    <!-- 列表展示 默认插槽 -->
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.panel{
    background-color: #fff;
    .header{
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3{
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            small{
                font-size: 16px;
                color: #ccc;
            }
        }
    }
}
</style>