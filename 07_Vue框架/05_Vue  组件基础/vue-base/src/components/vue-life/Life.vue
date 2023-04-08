<template>
    <div>
        <h2>生命周期</h2>
        <p ref="weather">
            {{ flag?'晴天':'阴天' }}
        </p>
        <button @click="btnDestory">组件销毁</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:'Hello',
                list:[],
                flag:true,
                timer:null
            }
        },
        methods:{
            btnDestory(){
                this.$destroy();
            }
        },
        beforeCreate(){
            console.group('beforeCreate:数据还没代理，访问不到data和方法');
            console.log("msg:",this.msg);
            console.log('$el:',this.$el);
        },
        created(){
            console.group('created:数据已经代理，能访问data和方法；是最早发送网络请求的地方');
            console.log("msg:",this.msg);
            console.log('$el:',this.$el);
            // $.ajax('http://......').success(res=>{
            //     this.list=res;
            // })
        },
        beforeMount(){
            console.group('beforeMount:挂载之前');
            console.log("msg:",this.msg);
            console.log('$el:',this.$el);
        },
        mounted(){
            console.group('mounted:挂载完成，此时才能操作DOM元素，开启定时器，绑定事件');
            console.log("msg:",this.msg);
            console.log('$el:',this.$el);

            this.timer=setInterval(()=>{
                this.flag=!this.flag;
            },2000)
        },
        beforeUpdate(){
            // console.group('beforeUpdate:数据更新之后，界面更新之前')
            // console.log(this.flag,this.$refs.weather.innerHTML);
        },
        updated(){
            console.group('updated:数据更新之后，界面也更新了');
            console.log(this.flag,this.$refs.weather.innerHTML);
        },
        beforeDestroy(){
            console.group('beforeDestroy:销毁之前，收尾工作，清除定时器，解绑事件');

            // 清除定时器
            clearInterval(this.timer);
            this.timer=null;
        },
        destroyed(){
            console.log('销毁之后');
        }
    }
</script>

<style lang="less" scoped>

</style>