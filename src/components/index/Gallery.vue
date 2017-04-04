<template lang='pug'>
  .gallery
    .gallery__container
      figure.card.gallery__card(v-for='n in 3')
        img.gallery__card-img(src='../../assets/img/vrwoman.png')
        figcaption.gallery__card-title Dr Emmett Brown, DeLorean
      a.next-btn
    a.btn.gallery__action View gallery
</template>

<script>
export default {
  name: 'gallery',
};
</script>

<style lang='scss'>
@import '~style';

.gallery {
  background-color: $color-lightgray;
  padding: $padding-page;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery__container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  position: relative;
}
.gallery__card {
  width: 20%;
}
.gallery__card-img {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 2rem;
}
.gallery__card-title {
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
