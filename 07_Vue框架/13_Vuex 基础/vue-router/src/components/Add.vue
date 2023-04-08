<template>
    <div>
        <h2>加 子组件---最常见方式</h2>
        <!-- 语法:$store.state.xxx -->
        <p>访问state数据的第一种方式：{{ $store.state.count }}---{{ this.$store.state.count }}</p>
        <p>
            <button @click="btnAdd">count++</button>
            <button @click="$store.commit('add')">count++(js写法,this可以省略)</button>
        </p>
        <p>
            <button @click="addN">count + N</button>
            <button @click="$store.commit('addN', 3)">count + N(js写法,this可以省略)</button>
        </p>
        <p>
            <button @click="addN2">count + 5 参数传递对象方式</button>
        </p>
        <p>
            <button @click="btnAddAsync">异步 ++</button>
            <button @click="btnAddNAsync(5)">异步 + N</button>
        </p>
        <p>
            访问getters的第一种方式：{{ $store.getters.showCount }}
        </p>
        <p>
            {{ $store.state.todos }}
            <hr>
            {{ $store.getters.doneGetters }}
        </p>
    </div>
</template>

<script>
// 引入常量
import { ADD_MUTATIOM } from '../store/mutation-types';

export default {
    mounted() {
        console.log("访问state数据的第一种方式  js：", this.$store.state.count);
    },
    methods: {
        btnAdd() {
            // // 2.触发mutation的第一种方式  this.$store.commit('mutation的名字')
            // this.$store.commit('add')

            this.$store.commit(ADD_MUTATIOM);
            // this.$store.state.count+=10; // 开启严格模式下会报错
        },
        addN() {
            // 触发mutation
            this.$store.commit('addN', 3)
        },
        addN2() {
            // 触发mutation
            this.$store.commit({
                type: 'addN2', // 这个名字一般会比较长,最好复制
                step: 5,
            })
        },
        // 异步++
        btnAddAsync(){
            // 触发某个action   语法：this.$store.dispatch('action名字')
            this.$store.dispatch('addAsync')
        },
        // 异步+N
        btnAddNAsync(num){
            // 触发某个action   语法：this.$store.dispatch('action名字',参数)
            this.$store.dispatch('addNAsync',num)
        }
    }
}
</script>

<style lang="less" scoped></style>