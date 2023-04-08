<template>
  <div>
    <!-- 
        props	配置选项，具体看下表	object
                label	指定节点标签为节点对象的某个属性值	string, function(data, node)
                children	指定子树为节点对象的某个属性值	string
                isLeaf	指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效	boolean, function(data, node)
        load	加载子树数据的方法，仅当 lazy 属性为true 时生效	function(node, resolve)
        lazy	是否懒加载子节点，需与 load 方法结合使用	boolean
            
      accordion	是否每次只打开一个同级树节点展开	boolean

      node-click	节点被点击时的回调	共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。

    -->
    <el-tree :props="props" :load="loadNode" accordion lazy @node-click='nodeClick'></el-tree>
  </div>
</template>

<script>
import { getCategory } from "@/api";
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf"
      }
    };
  },
  methods: {
    /**
     * 只要加载节点就调用’
     * node 节点
     * resolve 成功的返回结果
     */
    async loadNode(node, resolve) {
      if (node.level === 0) {
        // 页面一加载，获取第一层数据
        // 发网络请求，
        try {
          const res = await getCategory();
  
          if (res.status == 200) {
            return resolve(res.result);
          } else {
            // {status: 500, msg: '暂无数据'}
            return resolve([]);
          }
        } catch (error) {
          console.log(error);
          return resolve([]);
        }
      }
      //   当点击节点时，去加载下一层数据
      if (node.level > 0) {
        // 发网络请求，
        try {
          const res = await getCategory({ id: node.data.cid });
          if (res.status == 200) {
            return resolve(res.result);
          } else {
            return resolve([]);
          }
        } catch (error) {
          console.log(error);
          return resolve([]);
        }
      }
    },
    /**
     * 节点被点击时的回调	共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身
     */
    nodeClick(obj,node,arg){
      // {id:'',cid:'',name:''}
      // 1、自定义事件，把点击的节点对象，传递给父组件
      this.$emit('sendTreeData',obj)
    }
  }
};
</script>

<style lang="less" scoped>
</style>