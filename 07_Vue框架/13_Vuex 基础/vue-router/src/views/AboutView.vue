<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goBack">返回首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log(this.$router);
      this.$router.go(-1);
    }
  }
}
</script>
