<template>
    <div>
        <h3>Nest2</h3>
        {{ msg }}
        <!-- 
            v-moder原理：
            1.动态绑定value属性 v-bind:value=''
            2.监听 Input 事件
        -->
        <input type="text" v-model="msg">
        <p>
            <input type="text" :value="msg" @input="changeMsg">
        </p>
        <p>
            <input type="text" v-model="message">
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['msg']),
        message:{
            get(){
                return this.msg;
            },
            set(val){
                // 触发mutation
                this.$store.commit('changeMsg',val)
            }
        }
    },
    methods: {
        changeMsg(e) {
            // this.msg = e.target.value // 这样不行！
            // 严格模式一开启，修改数据必须得触发mutation
            this.$store.commit('changeMsg',e.target.value)
        }
    }
}
</script>

<style lang="less" scoped></style>