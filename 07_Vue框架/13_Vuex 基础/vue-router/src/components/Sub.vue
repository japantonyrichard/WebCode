<template>
    <div>
        <h2>减 子组件---辅助函数方式</h2>
        <p>访问state数据的第二种方式：{{ count }}---{{ count22 }}---{{ count33 }}</p>
        <p>
            <button @click="sub">count--</button>
            <!-- <button @click="subN(3)">count - 3</button> -->
            <button @click="SUBN_MUTATION(3)">count - 3</button>
        </p>
        <p>
            <button @click="btnSubNAsync(5)">异步 - N</button>
        </p>
        <p>
            访问getters的第二种方式：{{ showCount }}
        </p>
    </div>
</template>

<script>
// 1.按需引入辅助函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// 引入常量
import { SUBN_MUTATION } from '../store/mutation-types';

export default {
    data() {
        return {
            // count:10
            num: 100
        };
    },
    computed: {
        // 2.映射成当前组件需要的计算属性【常用】   (展开运算符...)...mapState(['','',''])
        ...mapState(['count']),
        ...mapState({
            // mapState 对象写法(用的很少，解决重名可以用)
            count22: state => state.count,
            // mapState 函数写法：功能更强大，可以访问操作data数据，前两种不能
            count33(state) {
                return state.count + this.num;
            }
        }),
        // getters      ...mapGetters(['','','']),
        ...mapGetters(['showCount']),
        // ...mapState(['count','num']),
        // ↑ 等价于 ↓
        // count(){

        // },
        // num(){

        // },
        fullname() { },
    },
    methods: {
        // ...mapMutations(['mapMutations名字']) 作用：将store中mutations映射成当前组件所需要的methods方法  (可以拿多个)
        // ...mapMutations(['sub','subN']),
        ...mapMutations(['sub', SUBN_MUTATION]),
        // ↑ 等价于 ↓
        // sub(){

        // },
        // ...mapActions(['action名字']),作用：将store中actions映射成当前组件所需要的methods方法
        ...mapActions(['subNAsync']),
        fn() {
            this.sub();
        },
        // 不需要下面这一步啊？？上面直接就能用
        // subN(){
        //     // this.subn_mutation
        //     this[SUBN_MUTATION](3);
        // }
        // 异步 - N
        btnSubNAsync() {
            this.subNAsync(5);
        }
    },
    mounted() {
        console.log(this.count);
    }
}
</script>

<style lang="less" scoped></style>