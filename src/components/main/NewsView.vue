<template>
  <section class="container">
    <h2>NEWS</h2>
    <div class="grid">
      <article>
        <router-link to="/">
          <img class="thumbnailImage"
            src="@/assets/images/HatsuneMikuVsing.jpg"
            alt="Hatsune Miku">
        </router-link>
        <p>Virtual Singer Hatsune Miku</p>
        <small>October 31, 2022</small>
      </article>
      <article>
        <router-link to="/">
          <img class="thumbnailImage"
            src="@/assets/images/HatsuneMikuAtNightCode.jpg"
            alt="Hatsune Miku">
        </router-link>
        <p>Virtual Singer Hatsune Miku</p>
        <small>October 31, 2022</small>
      </article>
      <article>
        <router-link to="/">
          <img class="thumbnailImage"
            src="@/assets/images/HatsuneMikuMoreMore.jpg"
            alt="Hatsune Miku">
        </router-link>
        <p>Virtual Singer Hatsune Miku</p>
        <small>October 31, 2022</small>
      </article>
      <article>
        <router-link to="/">
          <img class="thumbnailImage"
            src="@/assets/images/HatsuneMikuLeoNeed.jpg"
            alt="Hatsune Miku">
        </router-link>
        <p>Virtual Singer Hatsune Miku</p>
        <small>October 31, 2022</small>
      </article>
      <article>
        <router-link to="/">
          <img class="thumbnailImage"
            src="@/assets/images/HatsuneMikuVivid.jpg"
            alt="Hatsune Miku">
        </router-link>
        <p>Virtual Singer Hatsune Miku</p>
        <small>October 31, 2022</small>
      </article>
      <article>
        <router-link to="/">
          <img class="thumbnailImage"
            src="@/assets/images/HatsuneMikuDashow.jpg"
            alt="Hatsune Miku">
        </router-link>
        <p>Virtual Singer Hatsune Miku</p>
        <small>October 31, 2022</small>
      </article>
    </div>
    <footer-miku />
  </section>
</template>

<script lang="ts">
import FooterMiku from '@/components/layouts/FooterMiku.vue'

export default {
  data: () => {
    return {

    }
  },
  components: {
    FooterMiku,
  }
}
</script>
<style lang="scss">
.container {
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: normal;
  text-align: center;
  padding-top: 1px;
}
.grid {
  display: grid;
  flex-wrap: wrap;
  max-width: 1400px;
  gap: 40px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  p {
    margin: 0;
    color: black;
    font-weight: bold;
  }
  small {
    color: #a9a9a9;
  }
}
.thumbnailImage {
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 4px 5px 12px black;
  transition: all 0.3s;
  cursor: pointer;
}
.thumbnailImage:hover {
  transform: translate(4px, 5px);
  box-shadow: none;
}
</style>