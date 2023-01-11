<template>
  <NavBar></NavBar>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Nav-Bar.vue";

export default {
  components: {
    NavBar
  }
}
</script>

<style>

.wrapper{
  height: 95vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
