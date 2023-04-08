<template>
  <div>
    <p>访问state里的数据：{{$store.state.name}}</p>
    <p>访问getters：{{$store.getters.newName}}</p>
    <button @click="updateName">修改name</button>
    <button @click="updateNameAsync">异步修改name</button>
    <hr />
    <h3>分模块管理</h3>
    <p>访问state里的数据 city：{{$store.state.cityModule.city}}</p>
    <p>访问state里的数据 user：{{$store.state.userModule.user}}</p>

        
    <p>访问getters:{{$store.getters['cityModule/showCity']}}</p>

    <button @click="$store.commit('cityModule/changeCity')">修改 cityname</button>
    <button @click="$store.commit('userModule/changeUser')">修改 username</button>

  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup(props) {
    // 使用仓库
    const store = useStore();
    console.log("访问state里的数据：", store.state.name);
    console.log("访问getters:", store.getters.newName);
    console.log(store);

    const updateName = () => {
      // 触发mutation
      store.commit("updateName", "三毛");
    };
    // 异步修改
    const updateNameAsync = () => {
      // 触发
      store.dispatch("updateNameAsync", "zdd");
    };

    // 模块下—修改城市名字
    const updateCityName = () => {
      // 触发mutation
      store.commit("'cityModule/changeCity'");
    };

    return { updateName, updateNameAsync };
  }
};
</script>

<style lang="less" scoped>
</style>