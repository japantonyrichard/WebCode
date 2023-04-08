<template>
    <div>
        <h2>过滤器</h2>
        <p>{{ msg | upper }}</p>
        <p>{{ num | add }}</p>
        <p>{{ new Date(2022, 7, 8) | formatDate('yyyy-MM-dd') }}</p>
        <hr>
        <h3>moment.js</h3>
        <p>{{ new Date(2022, 6, 19) | formatDate2('MMM Do YY') }}</p>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            msg: 'asdHello',
            num: 1000
        }
    },
    // 局部过滤器
    filters: {
        add: function (val) {
            if (!val) return "";
            return '￥' + val.toString();
        },
        // 2022/7/8     2022-7-8    09:45:12
        formatDate: function (val, arg) {
            let str = '';
            if (arg == 'yyyy-MM-dd') {
                str = val.getFullYear() + '-' + val.getMonth() + '-' + val.getDate();
            }
            return str;
        },
        formatDate2: function (val, arg = 'MMMM Do YYYY, h:mm:ss a') {
            if (!val) return ''
            // return moment().locale('zh-cn').format(arg)
            return moment(val).locale('zh-cn').format(arg)
        }
    }
}
</script>

<style lang="less" scoped></style>