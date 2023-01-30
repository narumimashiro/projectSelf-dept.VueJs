<template>
  <!-- 参考にしたページ
    https://ja.getdocs.org/vuejs-create-image-slider
    https://devsakaso.com/vue-js-transition-group/
  -->
  <!-- <h1>Image Slider</h1> -->
  <!-- transition-groupのタグ要素はなんのタグの代わりにtransitionタグを使っているかの宣言 -->
  <!-- なので、divタグで囲む必要がなかった、始め囲っていたためサイズなどがおかしくなり、レイアウト崩れが起きていた -->
  <transition-group appear name="fade" tag="div">
    <div v-for="item in [current_index]" :key="item">
        <img class="image-viewer" :src="currentImg" />
    </div>
  </transition-group>
  <!-- 以下、next previous 機能 -->
  <!-- <a class="prev" @click="toPrev" href="#">&#10094;</a>
  <a class="next" @click="toNext" href="#">&#10095;</a> -->
</template>

<script>
// Image Import
const Airi = require("@/assets/prsk/Airi.jpg"); // こっちの書き方も可: import Airi from "../../assets/prsk/Airi.jpg";
const An = require("@/assets/prsk/An.jpg");
const Haruka = require("@/assets/prsk/Haruka.jpg");
const Ichika = require("@/assets/prsk/Ichika.jpg");
const Honami = require("@/assets/prsk/Honami.jpg");
const Shiho = require("@/assets/prsk/Shiho.jpg");
const Kanade = require("@/assets/prsk/Kanade.jpg");
const Ena = require("@/assets/prsk/Ena.jpg");
const Mahuyu = require("@/assets/prsk/Mahuyu.jpg");
const Mizuki = require("@/assets/prsk/Mizuki.jpg");
const LeoNeed = require("@/assets/prsk/LeoNeed.jpg");
const LeoNeed2 = require("@/assets/prsk/LeoNeed2.jpg");
const Miku = require("@/assets/prsk/Miku.jpg");
const Nene = require("@/assets/prsk/Nene.jpg");

const ERROR = require("@/assets/error.jpg");

export default {
  name: "ImageSlider",
  props: {
    image_kind : {
      type: String,
      require: false,  
    },
  },
  data: () => ({
    prsk_list: [Airi, An, Haruka, Ichika, Honami, Shiho, LeoNeed, LeoNeed2, Miku, Nene],
    night_code: [Kanade, Ena, Mahuyu, Mizuki],
    timer: null,
    current_index: 0,
  }),
  mounted: function() {
    this.startSlide();
  },
  methods: {
    startSlide: function() {
      this.timer = setInterval(this.toNext, 5000);
    },
    toNext: function() {
      this.current_index += 1;
    },
    toPrev: function() {
      this.current_index -= 1;
    },
  },
  computed: {
    currentImg: function() {
      switch(this.image_kind) {
      case 'prsk':
        return this.prsk_list[Math.abs(this.current_index) % this.prsk_list.length];
      case 'night_code':
        return this.night_code[Math.abs(this.current_index) % this.night_code.length];
      default:
        break;
      }
      return ERROR;
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 5s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  margin: 0 auto;
  opacity: 1;
  left: 0;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  margin: 0 auto;
  opacity: 0;
  left: 0;
}
.image-viewer {
  width: 80%;
  margin: 0 auto;
}

/* 以下、使っていないが残しておく next previous 機能 */
.prev, .next {
  cursor: pointer;
  position: absolute;
  /* top: 40%; */
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
/* ここまで使っていない */

</style>