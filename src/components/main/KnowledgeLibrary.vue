<template>
    <div>
        <h1>勉強したこと、調べたことなどなどをカテゴリー別に表示するところ</h1><hr>
        <nav class="nav-area">
          <label class="nav-item" :class="{ 'sel-nav' : cat_list.isAll }" @click="selectCat('all')">ALL</label>
          <label class="nav-item" :class="{ 'sel-nav' : cat_list.isClang }" @click="selectCat('c_cplus')">C/C++</label>
          <label class="nav-item" :class="{ 'sel-nav' : cat_list.isPython }" @click="selectCat('python')">Python</label>
          <label class="nav-item" :class="{ 'sel-nav' : cat_list.isJs }" @click="selectCat('javascript')">JavaScript</label>
        </nav>
        <div class="library-area">
          <transition-group appear name="fade-in" tag="div">
            <!-- :styleのところはアニメーションに遅延を持たせて順番に描画されるようにしている -->
            <div v-for="(item, index) in knowledgeData" :key="index" :style="{ 'transition-delay': `${ index * 0.1 }s`}">
              <div class="cont-header" @click="viewKnowledge(index)">
                <label class="info-no">No.{{  zeroPadding(index + 1) }}</label>
                <label class="info-title">{{ item.title }}</label>
                <label class="info-url" @click="jumpToUrl(item.url)">Learn more!!</label>
              </div>
              <div class="cont-body">
                <label class="cont-text" :class="{ 'view-active': (activeIndex === index) }">{{ item.sentences }}</label>
              </div>
            </div>
          </transition-group>
        </div>  <!-- library-area -->
        <back-to-top
          :right="'50%'" />
    </div>

</template>

<script>
import knowledge_file from '@/assets/json_data/knowledge-libraries.json';
import BackToTop from '@/components/layouts/BackToTop';
const NOT_SELECT = -1;

export default {
  name: 'KnowledgeLibrary',  // nameはデバッグに使うだけだから必要ないが、なんかAnonymousComponentになっていたからつけた
  data: () => {
    return {
      cat_list: {
        isAll: true,
        isClang: false,
        isPython: false,
        isJs: false,
      },
      knowledge_data: [],
      activeIndex: NOT_SELECT,
    }
  },
  components: {
    BackToTop,
  },
  computed: {
    knowledgeData: function() {
      knowledge_file.knowledge.forEach((el, index) => {
        this.knowledge_data[index] = { category: el.category, title: el.title, sentences: el.sentences, url: el.url };
      })
      return this.knowledge_data;
    },
  },
  methods: {
    selectCat: function(category) {
      Object.keys(this.cat_list).forEach(key => this.cat_list[key] = false);  // categoryのactiveをfalseにする
      switch (category) {
      case 'c_cplus':
        this.cat_list.isClang = true;
        break;
      case 'python':
        this.cat_list.isPython = true;
        break;
      case 'javascript':
        this.cat_list.isJs = true;
        break;
      default:
        this.cat_list.isAll = true;
        break;
      }
    },
    zeroPadding: function (num) {
      // 100超えたりしたらダメじゃん...後で考えよう...
      return num < 10 ? '0' + num : num;
    },
    jumpToUrl: function (url) {
      window.open(url);
    },
    viewKnowledge: function(index) {
      if (index === this.activeIndex) {
        this.activeIndex = NOT_SELECT;
      } else {
        this.activeIndex = index;
      }
    }
  }
}
</script>

<style>
/* ナビのデザイン */
.nav-area {
  display: flex;
  width: auto;
}
.nav-item {
  margin-right: 20px;
  font-weight: bold;
  text-decoration: underline;
}
.sel-nav {
  color: aqua;
}

/* 知識コンテンツのデザイン */
/* 概要側CSS */
.cont-header {
  display: flex;
  width: auto;;
  /* emはその時の文字列の大きさ */
  height: 2em;
  /* 付箋風CSS */ /* https://saruwakakun.com/html-css/reference/box */
  margin: 1em 0;
  background: #f4f4f4;
  border-left: solid 6px #5bb7ae;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);
}
.info-no {
  width: 6vw;
  margin: auto 0;
}
.info-title {
  width: 80vw;
  text-align: left;
  margin: auto 0;
}
.info-url {
  width: 7vw;
  text-align: right;
  margin: auto 0;
  text-decoration: underline;
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 2s ease;
  opacity: 1;
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
/* メイン本文側CSS */
.cont-text {
  display: none;
}
.cont-text.view-active {
  display: block;
  height: 5em;
  animation: appear .5s linear;
}
@keyframes appear {
  0% {
    height: 0px;
    opacity: 0;
  }
  100% {
    height:5em;
    opacity: 1;
  }
}

</style>

<!-- 
v-enter	enterの開始状態。要素が挿入される前に追加され、要素が挿入された後に削除される。
v-enter-active	enterの活性状態。要素が挿入される前に追加され、トランジション/アニメーションが終了すると削除される。
v-enter-to	enter の終了状態。要素が挿入された後に追加され、トランジション/アニメーションが終了すると削除される。
v-leave	leaveの開始状態。要素の削除が始まる前に追加され、開始直後に削除される。
v-leave-active	leaveの活性状態。要素の削除が始まる前に追加され、トランジション/アニメーションが終了すると削除される。
v-leave-to	leaveの終了状態。要素の削除が始まった直後に追加され、トランジション/アニメーションが終了すると削除されます。
-->

<!--  イメージ図
              Enter

opacity: 0; ==========> opacity: 1;
    |                       |
  v-enter               v-enter-to
|___________________________________|
                |
          v-enter-active

============================================

              Leave

opacity: 1; ==========> opacity: 0;
    |                       |
  v-leave               v-leave-to
|___________________________________|
                |
          v-leave-active
-->