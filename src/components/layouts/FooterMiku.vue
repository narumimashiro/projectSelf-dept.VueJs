<template>
  <div>
    <div class="miku-footer">
      <p>
        <img
          src="@/assets/images/logo_crypton.png"
          alt="Crypton">
      </p>
      <a href="https://piapro.jp/license/pcl/summary" target="_blank">
        <img
          src="@/assets/images/logo_piapro.svg.png"
          alt="piapro">
      </a>
    </div>
    <div class="copyright">
      <p>&copy;Colorful Palette Inc.</p>
      <p>/</p>
      <p>&copy;Crypton Future Media, INC. www.piapro.net</p>
    </div>
  </div>
</template>

<style lang="scss">
%logo-posi {
  display: inline-block;
  margin-top: 3.9ex;
  padding: 0 39px 0 39px;
}
.miku-footer {
  border-top: thick double #86cecb;
  p {
    @extend %logo-posi;
    margin-bottom: 0;
  }
  a {
    @extend %logo-posi;
  }
  img {
    width: 120px;
  }
}
.copyright {
  p {
    display: inline-block;
    font-size: 2ex;
    padding: 0 2px 3.9ex 2px;
  }
}
</style>
