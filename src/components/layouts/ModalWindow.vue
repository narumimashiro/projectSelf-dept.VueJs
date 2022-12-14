<template>
  <transition apper name="modal" tag="div">
    <div class="modal-overlay" @click.self="closeModal">
      <div class="message-box" :style="{width: boxWidth + 'px', height: boxHeight + 'px'}" >
        <header class="message-box-header">
          <p><span>{{ message }}</span></p>
        </header>
        <section class="message-box-body">

        </section>
        <footer class="message-box-footer">

        </footer>
      </div>
    </div>
  </transition>
</template>
<!-- // https://cr-vue.mio3io.com/examples/modal.html#%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89 -->

<script lang="ts">
import Vue from 'vue'
interface ModalInfo {
  message: string,
  width: number,
  height: number,
}

export default Vue.extend({
  data: () => {
    return {
      message: '',
      boxWidth: 390,
      boxHeight: 260,
    }
  },
  created: function() {
    const modalInfo: ModalInfo = this.$store.getters['Redux/getModalInfo']
    this.message = modalInfo.message
    this.boxWidth = modalInfo.width
    this.boxHeight = modalInfo.height
  },
  methods: {
    closeModal: function() {
      this.$store.dispatch('Redux/setModalInfo', false)
    },
  }
})
</script>

<style lang="sass">
.modal-overlay
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  z-index: 30
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, 0.5)

.message-box
  background-color: #FFF

.message-box-header
  height: 15%
  p
    height: 100%
    margin: 0 auto 0 auto
    span
      position: relative
      margin: auto

.message-box-body
  background: blue

.message-box-color
  height: 15%
  backgroud: #86cecb

.modal-enter-active,
.modal-leave-active
  transition: opacity .96s
  .message-box
    transition: opacity .39s, transform .6s

.modal-enter, .modal-leave-to
  opacity: 0
  .message-box
    opacity: 0
    transform: translateY(-39px)
</style>