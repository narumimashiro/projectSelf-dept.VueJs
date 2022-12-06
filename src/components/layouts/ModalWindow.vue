<template>
  <transition apper name="fade" tag="div">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="message-box" :style="{width: boxWidth + 'px', height: boxHeight + 'px'}" >
        <p>{{ message }}</p>
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
})
</script>

<style lang="scss">
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.message-box {
  background-color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.39s;
  .message-box {
    transition: opacity .39s, transform .6s
  }
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  .message-box {
    opacity: 0;
    transform: translateY(-39px);
  }
}
</style>