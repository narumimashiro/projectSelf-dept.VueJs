<template>
  <div id="app">
    <nav-bar />
    <router-view/>
    <modal-window v-if="$store.getters['Redux/getModalOpen']"/>
  </div>
</template>

<script lang="ts">
import NavBar from '@/components/layouts/NavBar.vue';
import ModalWindow from '@/components/layouts/ModalWindow.vue'

export default {
  components: {
    NavBar,
    ModalWindow,
  }
}
</script>
<style>
#app {
  font-family: Menlo;
  /* Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* padding: 0 2rem; */
  text-align: center;
  color: #502c2c;
}

body {
  background-color: #fdeeef;
}
</style>
