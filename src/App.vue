<template>
  <h1>Vue Basics</h1>
    <h2>Vue Slots</h2>
    <ChildComponent />
</template>

<script>
import ParentComponet from "./components/ParentComponet.vue";
import ChildComponent from "./components/ChildComponent.vue";
export default{
  name:"App",
  components:{
    ParentComponet,
    ChildComponent
  }
}
</script>

<style>

</style>
