<template>
    <div>
        <h2>访问根实例</h2>
        <p>根实例的数据：{{ $root.user }}</p>
        <p>
            <button @click="getRoot">获取根实例</button>
        </p>

        <p>
            <button @click="getChildren">获取子组件</button>
        </p>
        <!-- <hr>
        <Son/> -->
        <hr>
        <Son ref="mySon"/>

        <hr>
        <h2>访问子组件实例或子元素--$ref</h2>
        <div ref="myDiv">DOM元素 div</div>
        <button @click="getRef">获取子组件和DOM元素</button>

        <hr>
        <h2>访问原型上的属性</h2>
        <button @click="getPrototype">访问原型上的属性</button>
        

        
    </div>
</template>

<script>
// 引入
import Son from './Son.vue'
    export default {
        props:[],
        components:{
            // 注册组件
            Son
        },
        data() {
            return {
                msg:'小头爸爸'
            }
        },
        methods:{
            getRoot(){
                console.log(this);
                console.log(this.$root.age);
                this.$root.test(); // 调用全局的方法
            },
            run(){
                console.log('父组件方法');
            },
            // 获取子组件
            getChildren(){
                console.log(this);
                // 由所有子组件组成的数组
                console.log(this.$children[0].info);
            },
            getRef(){
                // $refs  {}  DOM元素，组件
                console.log(this.$refs);
                this.$refs.myDiv.style.color='green'
                console.log('$refs 获取子组件数据：',this.$refs.mySon.info);
            },
            // 访问原型上的属性
            getPrototype(){
                console.log(this);
                console.log(this.$title);
            }
        }
    }
</script>

<style lang="less" scoped>

</style>