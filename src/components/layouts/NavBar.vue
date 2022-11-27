<template>
  <div>
    <nav>
      <div class="to-top">
        <li>
          <router-link to="/">Top</router-link>
        </li>
      </div>
      <div class="nav-cont">
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/news">News</router-link>
        </li>
        <li>
          <a href="https://pjsekai.sega.jp/" target="_blank">prsk</a>
        </li>
        <li>
          <a href="https://genshin.hoyoverse.com/ja" target="_blank">Genshin</a>
        </li>
        <li>
          <a
            href="https://playvalorant.com/ja-jp/?utm_source=riotbar&utm_medium=productcard%2Bplayvalorant.com&utm_campaign=val&utm_content=ep5act1"
            target="_blank"
            >Valorant</a
          >
        </li>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
@mixin sel-list($color: #000) {
  color: $color;
}

%list-style {
  display: inline;
  list-style-type: none;
  font-size: 2em;
  font-family: "Comic Sans MS";
  font-style: italic;
  text-shadow: 2px 2px #302833;
}

%link-style {
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-style: dotted;
      text-decoration-color: #302833;
      text-decoration-thickness: 0.1em;
    }
  }
}

.to-top {
  @extend %link-style;
  text-align: left;
  float: left;
  li {
    @extend %list-style;
    a {
      @include sel-list(#ff99ff);
    }
  }
}

.nav-cont {
  text-align: right;
  li {
    @extend %list-style;
    padding-left: 2ex;
  }
  li:nth-of-type(1) a {
    @include sel-list(#99ffff);
  }
  li:nth-of-type(2) a {
    @include sel-list(#99ff99);
  }
  li:nth-of-type(3) a {
    @include sel-list(#ccff99);
  }
  li:nth-of-type(4) a {
    @include sel-list(#ffff99);
  }
  li:nth-of-type(5) a {
    @include sel-list(#ffcc99);
  }
  @extend %link-style;
}
</style>
