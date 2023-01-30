<template>
    <!-- ソースコード参考箇所 -->
    <!-- https://pengi-n.co.jp/blog/hamburger-animation/#i-3 -->
    <!-- https://eclair.blog/make-hamburger-menu-with-vuejs/ -->

    <div class="side-menu-slide">
      <div class="humberger-btn" :class="{active: isOpen}" @click="isOpen=!isOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu" :class="{'is-active' : isOpen }">
        <div class="menu_item">TOP</div>
        <div class="menu_item">ABOUT</div>
        <div class="menu_item">BLOG</div>
        <div class="menu_item">CONTACT</div>
        <!-- native修飾子を付けることでコンポーネント側のメソッドを呼び出せる -->
        <router-link to="/trial"
                     class="menu_item"
                     @click.native="closeSideMenu">TRIAL
        </router-link>
        <router-link to="/knowledge"
                     class="menu_item"
                     @click.native="closeSideMenu">KNOWLEDGE
        </router-link>
        <router-link to="/inquiry"
                     class="menu_item"
                     @click.native="closeSideMenu">INQUIRY
        </router-link>
      </div>
    </div>
    
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  component: {
  },
  methods: {
    closeSideMenu: function() {
      this.isOpen = false;
    }
  },
}
</script>

<style>
/*----------------------------
メニュー開閉ボタン
*----------------------------*/
.humberger-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgb(150, 255, 255);
  cursor: pointer;
  width: 50px;
  height:50px;
  z-index: 3;
  border-radius: 5px;
}
.humberger-btn span {
  display: inline-block;
  transition: all .4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: #fff;
}
/* :nth-of-type()についてのリファレンス
https://developer.mozilla.org/ja/docs/Web/CSS/:nth-of-type */
.humberger-btn span:nth-of-type(1) {
  top: 15px;
  width: 45%;
}
.humberger-btn span:nth-of-type(2) {
  top: 23px;
  width: 35%;
  margin-left: 10%;
}
.humberger-btn span:nth-of-type(3) {
  top: 31px;
  width: 20%;
  margin-left: 25%
}
.humberger-btn.active span:nth-of-type(1) {
  top: 18px;
  left: 18px;
  transform: translateY(6px) rotate(-135deg);
  width: 30%;
}
.humberger-btn.active span:nth-of-type(2) {
  opacity: 0;
}
.humberger-btn.active span:nth-of-type(3){
  top: 30px;
  left: 18px;
  transform: translateY(-6px) translateX(-12.5px) rotate(135deg);
  width: 30%;
}
/*----------------------------
* メニュー本体
*----------------------------*/
.menu{
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(150, 255, 255);
}
.menu_item{
  width: 100%;
  height: auto;
  padding: .2em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  font-size: 1.5em;
}
.menu_item:hover {
  transition: all .6s ease;
  color: rgba(53, 50, 255, 0.658);
}

/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
.menu{
  transform: translateX(100vw);
  transition: all .3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}
</style>