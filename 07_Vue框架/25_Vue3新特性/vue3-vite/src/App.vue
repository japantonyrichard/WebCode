<template>
  <!-- <Setup/> -->
  <!-- <Life/> -->
  <!-- <Ref/> -->
  <!-- <reactive/> -->
  <!-- <toRef/> -->
  <!-- <toRefs/> -->
  <!-- <zonghe/> -->
  <!-- <useMouse/> -->
  <!-- <RefAttr/> -->
  <!-- <myComputed/> -->
  <!-- <Watch/> -->
  <!-- <PropsFather/> -->
  <!-- <PjFather/> -->
  <!-- <MittFather/> -->
  <Home/>
</template>

<script>
import Setup from "./components/01-Setup.vue";
import  Life  from './components/02-Life.vue'
import Ref from './components/03-Ref.vue'
import reactive  from './components/04-reactive.vue'
import toRef  from './components/05-toRef.vue'
import toRefs from './components/06-toRefs.vue'
import zonghe  from './components/07-zonghe.vue'
import useMouse  from './components/08-useMouse.vue'
import  RefAttr  from  './components/09_RefAttr.vue'
import  myComputed from './components/10-computed.vue'
import Watch from './components/11-Watch.vue'
import PropsFather from './components/12-Props/PropsFather.vue'
import PjFather from './components/13-ProvideInject/PjFather.vue'
import MittFather  from './components/14-Mitt/MittFather.vue'
import Home  from  './components/15-vuex/Home.vue'
export default {
  name: "App",
  components: {
    Setup,
    Life,
    Ref,
    reactive,
    toRef,
    toRefs,
    zonghe,
    useMouse,
    RefAttr,
    myComputed,
    Watch,
    PropsFather,
    PjFather,
    MittFather,
    Home
  }
};
</script>
