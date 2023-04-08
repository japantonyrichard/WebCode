<template>
    <div>
        <h3>我是Son1子组件</h3>
        父向子传递的数据：{{ msg }}----{{ msg1 }}
        <!-- 调用写在子组件里 -->
        <button @click="run('我是大头儿子')">调用父组件的方法</button>
    </div>
</template>

<script>

export default {
    // 2.子组件接收
    props: ['msg', 'msg1','run']
};
</script>

<style lang="less" scoped></style>