<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      editor: {}
    };
  },
  mounted() {
    this.editor = new E("#main");
    // 取消自动 focus
    this.editor.config.focus = false;
    // 默认情况下，显示所有菜单
    this.editor.config.menus = [
      "head",
      "bold",
      "fontSize",
      "code",
      "splitLine",
      "undo",
      "redo"
    ];

    // 配置 onchange 回调函数
    this.editor.config.onchange = (newHtml)=> {
      console.log("change 之后最新的 html", newHtml);
      //1、 自定义事件  把富文本框里输入的内容传到GoodsDialog 里
      this.$emit("sendEditor", newHtml);
    };

    this.editor.create();

    // // 设置内容
    // this.editor.txt.html("<p>用 JS 设置的内容</p>"); // 重新设置编辑器内容
    // // editor.txt.html() 获取 html 。
    // console.log(this.editor.txt.html());
    // // editor.txt.clear() 清空编辑器内容
    // this.editor.txt.clear();
  }
};
</script>

<style lang="less" scoped>
</style>