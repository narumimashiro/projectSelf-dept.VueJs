<template>
  <div class="profile">
    <h1>This is a profile page</h1>
    <button @click="setModal">set Modal</button>
    <modal-window @close="closeModal" v-if="modal" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalWindow from '@/components/layouts/ModalWindow.vue'

export default Vue.extend({
  data: () => {
    return {
      modal: false,
    }
  },
  components: {
    ModalWindow,
  },
  methods: {
    setModal: function() {
      const modalinfo = {message: 'This is Modal Window', width: 780, height: 390}
      this.$store.dispatch('Redux/setModalInfo', modalinfo)
      this.openModal()
    },
    openModal: function() {
      this.modal = true
    },
    closeModal: function() {
      this.modal = false
    },
  }
})
</script>
<style lang="scss">

</style>