<template>
  <div>
    <!-- 
        action	必选参数，上传的地址	string
        on-preview	点击文件列表中已上传的文件时的钩子	function(file)
        on-remove	文件列表移除文件时的钩子	function(file, fileList)
        file-list	上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]	array
        auto-upload	是否在选取文件后立即进行上传	boolean

        on-success	文件上传成功时的钩子	function(response, file, fileList)

    -->
    <el-upload
      class="upload-demo"
      ref="upload"
      :action="url"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :on-success="onSuccess"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import base from "@/api/base.js";
export default {
  data() {
    return {
      fileList: [],
      //   http://localhost:7878/upload
      url: base.upload //  /upload
    };
  },
  methods: {
    /**
     * 文件上传成功时的钩子	function(response, file, fileList)
     */
    onSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      // response.url "upload\\1658904159791-1.png"  http://localhost:7878/1658904159791-1.png
      let imgUrl = base.baseUrl + "/" + response.url.slice(7);
      console.log(imgUrl);
      // 1、上传成功提醒
      this.$message({
        message: "恭喜你，上传图片成功",
        type: "success"
      });

      // 2、自定义事件
      this.$emit("sendImg", imgUrl);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style lang="less" scoped>
</style>