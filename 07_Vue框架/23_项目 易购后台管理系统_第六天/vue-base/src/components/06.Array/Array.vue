<template>
    <div>
        <h2>数组更新检测</h2>
        <p>{{arr}}</p>
        <button @click="addArr">添加一个</button>
        <p>
            <button @click="cut">截取</button>
        </p>
        <p>
            <button @click="update">修改数组元素</button>
        </p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr:['grape','mongo','peach']
            }
        },
        methods: {
            addArr(){
                // 修改了原数组，界面变
                // this.arr.push('lemon');
                this.arr.reverse();
            },
            cut(){
                // let newArr= this.arr.slice(1)
                // console.log(newArr);
                // // 替换
                // this.arr=newArr;
                // 替换简写
                this.arr=this.arr.slice(1)
            },
            update(){
                // 通过数组下标更改数组元素，改不掉
                // this.arr[2]='banana';

                // this.$set(this.arr,2,'banana')
                this.$delete(this.arr,2)

            }
        },
    }
</script>

<style lang="less" scoped>

</style>