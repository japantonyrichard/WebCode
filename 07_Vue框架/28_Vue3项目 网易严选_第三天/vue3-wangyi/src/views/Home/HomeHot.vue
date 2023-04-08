


<template>
  <div class="home-hot">
    <Panel title="人气推荐" subTitle="人气爆款 不容错过">
        <!-- 使用默认插槽 -->
        <ul class="goods-list">
            <li class="item" v-for="item in list" :key="item.id">
                <router-link to='/'>
                    <img :src="item.scenePicUrl" alt="">
                    <div class="title ellipsis-2">
                        {{item.name}} 
                    </div>
                </router-link>
            </li>
        </ul>
    </Panel>
  </div>
</template>

<script>
import Panel from "../../components/Panel.vue";
import {getHotList} from '@/api'
import {reactive,ref} from 'vue'
export default {
  components: {
    Panel
  },
  setup(props) {
    // 定义变量
    let list = ref(null)
    // 获取列表
    const getHot=async ()=>{
        try {
            const res=await getHotList();
            console.log(res);
            if(res.msg=='操作成功'){
                list.value=res.result.slice(0,4)
            }
        } catch (error) {
            console.log(error);
        }
    }
    // 调用
    getHot();


    return {list}
  }
};
</script>

<style lang="less" scoped>
.home-hot{
    .goods-list{
        display: flex;
        // 主轴上排列方式
        justify-content: space-between;
        
        .item{
            width: 265px;
            height: 365px;
            background-color: #f5f5f5;
            .hoverShadow ();
            img{
                width: 265px;
                height: 265px;
            }
            .title{
                font-size: 17px;
                text-align: center;
                padding: 15px 25px;
            }
        }
    }
}
</style>