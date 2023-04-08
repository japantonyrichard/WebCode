<!-- vbl -->
<template>
    <div>
        <h2>我是父组件</h2>
        <hr>
        <!-- 1.父向子传递非函数数据（普通数据：静态数据、动态数据） -->
        <Son1 msg="我是小头爸爸！" :msg1="msg1" :run="run1" />
        <!-- 2.父向子传递函数数据 本质：子向父传值 :run="run1" -->
        <hr>
        <Son2 :num="num" propC='propC' :propD="propD" propF="a"/>
    </div>
</template>

<script>
// 2.引入
import Son1 from './Son1.vue'
import Son2 from './Son2.vue'
export default {
    // 3.注册
    components: {
        Son1,
        Son2,
    },
    data() {
        return {
            msg1: '我是父组件动态数据',
            num:'gklsjlgselkseglk',
            propD:200
        }
    },
    methods: {
        // 方法定义在父组件里
        run1(msg) {
            alert('我是父组件的方法:' + msg)
        }
    }
}
</script>

<style lang="less" scoped></style>