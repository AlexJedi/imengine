<template lang='pug'>
  .slider
    figure.card.slider-card.card-first
      img.img(src='../../assets/img/vrwoman.png')
      figcaption.title Dr Emmett Brown, DeLorean
    figure.card.slider-card.card-second
      img.img(src='../../assets/img/vrwoman.png')
      figcaption.title Dr Emmett Brown, DeLorean
    figure.card.slider-card.card-third
      img.img(src='../../assets/img/vrwoman.png')
      figcaption.title Dr Emmett Brown, DeLorean
    figure.card.slider-card.card-fourth
      img.img(src='../../assets/img/vrwoman.png')
      figcaption.title Dr Emmett Brown, DeLorean
    a.next-btn
    a.prev-btn
    router-link.btn.slider-action(to='gallery')
</template>

<script>
export default {
  name: 'slider',
};
</script>

<style lang='scss' scoped>
@import '~style';

.slider-action {
  width: 12rem;
  height: 12rem;
  position: absolute;
  top: 65%;
  right: 17%;
  background: $color-purple;
  z-index: 1000;
  border-radius: 0;
  &:before {
    position: absolute;
    content: "";
    top: calc(50% - 3rem);
    right: calc(50% - 0.5rem);
    background: $color-white;
    width: 1rem;
    height: 6rem;
    transform: rotate(90deg);
  }
  &:after {
    position: absolute;
    content: "";
    top: calc(50% - 3rem);
    right: calc(50% - 0.5rem);
    background: $color-white;
    width: 1rem;
    height: 6rem;
  }
  &:hover {
    opacity: 0.8;
  }
}
.slider {
  background-color: $color-white;
  padding: $padding-page;
  position: relative;
  height: 80vh;
  &:after {
    position: absolute;
    content: "";
    top: 30%;
    left: 0;
    height: 40%;
    width: 100%;
    background-color: $color-lightgray;
  }
}
.container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  position: relative;
  z-index: 100;
}
.slider-card {
  width: 14%;
  z-index: 102;
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
.card-first {
  position: absolute;
  top: 45%;
  left: 7%;
}
.card-second {
  position: absolute;
  top: 10%;
  left: 28%;
}
.card-third {
  position: absolute;
  top: 45%;
  left:49%;
}
.card-fourth{
  position: absolute;
  top: 10%;
  left:70%;
}
.next-btn {
  position: absolute;
  width: 6rem;
  height: 40%;
  top: 0;
  right: 0;
  background: $color-purple;
  cursor: pointer;
  z-index: 101;
  &:hover {
    opacity: 0.8;
  }
}
.prev-btn {
  position: absolute;
  width: 6rem;
  height: 40%;
  bottom: 0;
  left: 0;
  background: $color-purple;
  cursor: pointer;
  z-index: 101;
  &:hover {
    opacity: 0.8;
  }
}
</style>
