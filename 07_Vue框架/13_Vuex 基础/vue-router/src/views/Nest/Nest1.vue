<template>
    <div>
        <h3>Nest1</h3>
        <h1>模块下---普通方式</h1>
        <p>state：{{ $store.state.cityModule.cityName }}</p>
        <p>
            <button @click="updateCity">修改城市数据</button>
        </p>
        <p>
            <button @click="updateCityAsync">异步修改城市名字</button>
        </p>
        <p>
            访问getter：{{ $store.getters['cityModule/showCity'] }}
        </p>
        <p>
            8.3 在带命名空间的模块内访问全局内容:{{$store.getters['cityModule/someGetter']}}
        </p>

        <hr>
        <h1>模块下---辅助函数方式</h1>
        <p>
            mapState：{{ cityName }}---{{ cityId }}
        </p>
        <p>
            <button @click="updateCity2">修改城市名字</button>
        </p>
        <p>
            <button @click="updateCity2Async">异步修改城市名字</button>
        </p>
        <p>
            getters:{{ showCity }}
        </p>
        <p>
            <button @click="btnSomeAction">访问全局内容 someAction</button>
        </p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
    created() {
        console.log(this.$store);
    },
    computed: {
        // 语法： ...mapState('模块名字',['模块的变量1','模块的变量2']),
        ...mapState('cityModule', ['cityName', 'cityId']),
        // 模块下面拿getters属性  ...mapGetters('模块名字',['showCity'])
        ...mapGetters('cityModule',['showCity'])
    },
    methods: {
        // 辅助函数语法：...mapMutations('模块名字',['Mutation名字1','Mutation名字2']),
        ...mapMutations('cityModule', ['changeCity']),
        // 辅助函数语法：...mapActions('模块名字',['Action名字1','Action名字2']),
        ...mapActions('cityModule', ['changeCityAsync','someAction']),
        updateCity() {
            // 普通方式 触发mutation    语法：this.$store.commit('模块名/mutation名','参数')
            this.$store.commit('cityModule/changeCity', '天津')
        },
        // 异步修改
        updateCityAsync() {
            // 普通方式 触发action  语法：this.$store.dispatch('模块名/mutation名','参数')
            this.$store.dispatch('cityModule/changeCityAsync', '大阪')
        },
        updateCity2() {
            // 辅助函数方式 触发mutation
            this.changeCity('重庆')
        },
        updateCity2Async() {
            // 辅助函数方式 触发action
            this.changeCityAsync('横滨')
        },
        // 访问全局内容 someAction
        btnSomeAction(){
            this.someAction();
        }
    }
};
</script>

<style lang="less" scoped></style>