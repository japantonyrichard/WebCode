<template>
    <div>
        <h2>DataReactive</h2>
        <p>
            obj:{{obj}}
        </p>
        <p>
            <button @click="changeName">修改name</button>
        </p>
        <p>
            <button @click="obj={age:18}">修改整个对象</button>
        </p>
        <p>
            <button @click="addAge">添加Age</button>
        </p>
        <p>
            <button @click="delName">删除Nam</button>

        </p>


    </div>
</template>

<script>
    export default {
        props:[''],
        data() {
            return {
                obj:{
                    name:'张三'
                }
            }
        },  
        computed: {
            
        },
        watch: {
            
        },
        methods: {
            changeName(){
                this.obj.name+='============'
            },
            addAge(){
                // 
                // this.obj.age=18;
                // console.log(this.obj);
                // 方法1：
                // this.obj={...this.obj}
                // 方法2：
                // this.obj=Object.assign({},this.obj)
                // 方法3： Object.defineProperty(Obj,'',{})
                this.$set(this.obj,'age',18)
                console.log(this.obj);
            },
            delName(){
                // delete this.obj.name
                // console.log(this.obj);

                this.$delete(this.obj,'name')
            }
        },
        
    }
</script>

<style lang="less" scoped>

</style>