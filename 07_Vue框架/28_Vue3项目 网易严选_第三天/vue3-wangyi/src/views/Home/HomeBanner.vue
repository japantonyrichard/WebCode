

<template>
  <div>
    <!-- 直接使用，全局组件轮播图组件 -->
    <AppBanner :list="list" />
  </div>
</template>

<script>
import { getBannerList } from "@/api";
import { ref } from "vue";
export default {
  setup(props) {
    // 定义变量，存放返回的数据 ref  reactive
    let list = ref(null);
    // 加载轮播图
    const getBanner = async () => {
      try {
        const res = await getBannerList();
        if (res.msg == "操作成功") {
          list.value = res.result;
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    // 调用
    getBanner();

    // 返回
    return { list };
  }
};
</script>

<style lang="less" scoped>
</style>