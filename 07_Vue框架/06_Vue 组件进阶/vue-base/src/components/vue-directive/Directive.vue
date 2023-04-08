

<template>
    <div>
        <h2>自定义指令</h2>
        <input type="text" v-focus2>
        <input type="text" v-color="{color:'red'}">
        <input type="text" v-color="{color:'blue'}">

    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        // 局部
        directives:{
            focus2:{
                inserted:function(el){
                    el.focus();
                }
            },
            focus3:{

            }
        }
    }
</script>

<style lang="less" scoped>

</style>