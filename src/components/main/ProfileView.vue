<template>
  <div class="profile">
    <h1>This is a profile page</h1>
    <button @click="setModal">set Modal</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
    }
  },
  methods: {
    setModal: function() {
      const modalinfo = {message: 'This is Modal Window', width: 780, height: 390}
      this.$store.dispatch('Redux/setModalInfo', modalinfo)
    },
  }
})
</script>
<style lang="scss">

</style>