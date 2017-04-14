<template lang='pug'>
  .slider
    .slider__container
      figure.card.slider__card(v-for='n in 3')
        img.slider__card-img(src='../../assets/img/vrwoman.png')
        figcaption.slider__card-title Dr Emmett Brown, DeLorean
      a.next-btn
    router-link.btn.slider__action(to='gallery') View gallery
</template>

<script>
export default {
  name: 'slider',
};
</script>

<style lang='scss'>
@import '~style';

.slider {
  background-color: $color-lightgray;
  padding: $padding-page;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slider__container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  position: relative;
}
.slider__card {
  width: 20%;
}
.slider__card-img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 2rem;
}
.slider__card-title {
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
