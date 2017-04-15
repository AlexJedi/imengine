<template lang='pug'>
  .slider
    .container
      figure.card.slider-card(v-for='n in 3')
        img.img(src='../../assets/img/vrwoman.png')
        figcaption.title Dr Emmett Brown, DeLorean
      a.next-btn
    router-link.btn.slider-action(to='gallery') View gallery
</template>

<script>
export default {
  name: 'slider',
};
</script>

<style lang='scss' scoped>
@import '~style';
.slider-action {
  text-decoration: none;
}
.slider {
  background-color: lighten($color-lightgray, 3);
  padding: $padding-page;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  position: relative;
}
.slider-card {
  width: 20%;
}
.img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 2rem;
}
.title {
  font-size: 2rem;
  font-weight: 500;
  color: $color-dark;
}
.next-btn {
  position: absolute;
  width: 2rem;
  height: 4rem;
  top: calc(50% - 2rem);
  right: -$padding-page + 2rem;
  background: url('../../assets/img/icons/next.svg') no-repeat center center / 300%;
  cursor: pointer;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
}
</style>
