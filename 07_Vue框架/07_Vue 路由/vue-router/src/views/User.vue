<template>
    <div>
        <h2>User</h2>
        <!-- 在模板当中展示参数 -->
        <p>name:{{ $route.params.id }}---{{ $route.params.name }}</p>
        <!-- 通过props解耦  低耦合度 -->
        <p>路由组件传参方式：{{ id }}---{{ name }}</p>
        <p>msg:{{ msg }}</p>
    </div>
</template>

<script>
export default {
    // 第二步：props接收
    props: ['id', 'name'],
    data() {
        return {
            msg:'123'
        }
    },
    created() {
        console.log(this);
        // 获取参数 {参数:值,id:123,name:''}
        console.log(this.$route.params);
    },
    mounted(){
        console.log('mounted===========');
        this.getUserInfoById();
    },
    methods:{
        getUserInfoById(){
            console.log('根据ID去查详情');
        }
    },

    // 组件内的守卫(3个)
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log(this); // undefined
        // vm:组件实例    数据代理完了拿到this之后立马执行下面的逻辑
        next(vm=>{
            vm.msg='456';
        });
    },
    beforeRouteUpdate(to,from,next){
        console.log(to);
        console.log(from);
        if(to.path!=from.path){
            // 调用方法，发送网络请求
            this.getUserInfoById();
        }
        next();
    },
    beforeRouteLeave (to, from, next) {
        // ...
        next();
    }
};
</script>

<style lang="less" scoped></style>