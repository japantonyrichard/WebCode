<template>
    <div>
        <h3>Son2</h3>
        num:{{ num }}---{{ propC }}---{{ propD }}---{{ propF }}
    </div>
</template>

<script>
export default {
    // 方式1：数组写法
    // props: ['num']
    // 方式2：对象写法
    props: {
        // num:Number,
        // 多个可能类型 num:[Number,String,...,]
        num: [Number, String],
        // 必填
        propC: {
            required: true
        },
        // 默认值
        propD: {
            type: Number,// 必须数字
            default: 100
        },
        propF: {
            validator: function (val) {
                // propF 只能是 三者中一个
                return ['a', 'b', 'c'].indexOf(val) != -1
            }
        }
    }
}
</script>

<style lang="less" scoped></style>