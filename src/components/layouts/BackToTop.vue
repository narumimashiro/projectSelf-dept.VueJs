<template>
  <div>
    <transition name="back-to-top-fade">
      <slot>
        <button
          v-show="display"
          type="button"
          class="back-to-top"
          :title="alt"
          :style="{ ...btnStyle, bottom: bottom, right: right }"
          @click="backToTop()"
        >
        <!-- ...btnStyleの...はスプレッド構文というもの -->
          <img class="btn-img" :src="imgSrc">
      </button>
      </slot>
    </transition>
  </div>
</template>

<script>
const BackToTopImage = require('@/assets/images/back_to_top.png');

export default {
  props: {
    offsetTop: {
      type: Number,
      default: 100,
    },
    alt: {
      type: String,
      default: "Back to top",
    },
    bottom: {
      type: String,
      default: '20px',
    },
    right: {
      type: String,
      default: '20px',
    },
    btnStyle: {
      type: Object,
      default: () => {
        return {
          width: '50px',
          height: '50px',
        }
      },
    },
  },
  data: () => {
    return {
      scrollY: 0,
    };
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    display: function() {
      return this.scrollY && scrollY > this.offsetTop;
    },
    imgSrc: function () {
        return BackToTopImage;
    }
  },
  methods: {
    handleScroll: function() {
      setTimeout(() => {
        this.scrollY = window.scrollY;
      }, 100);
    },
    backToTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
/* positionのrelative, absolute, fixedについて詳しく説明があった
https://mdstage.com/html-css/css-intermediate/position */
.back-to-top {
  position: fixed;
  border: 1px solid rgb(170, 255, 170);
  padding: 0px;
  border-radius: 50%;
  background-color: rgb(228, 254, 255);
  z-index: 9;
  opacity: 0.8;
}
.btn-img {
  width: 100%;
  height: 100%;
}
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}
.back-to-top:hover {
  animation: up-down .2s alternate ease-in-out;
  animation-iteration-count: 4;
}
@keyframes up-down {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>