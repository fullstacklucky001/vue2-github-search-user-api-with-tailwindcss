<template>
  <!-- <HelloWorld :childProps="msg" /> -->
  <!-- <HelloWorld>Message: {{ msg }}</HelloWorld> -->
  <DevFinder />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DevFinder from './components/DevFinder.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: 'No child msg yet'
    }
  },
  components: {
    // HelloWorld,
    DevFinder

  }
}
</script>

<style></style>
