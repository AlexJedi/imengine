<template lang='pug'>
  .catalog
    h2.title.section-title gallery
    .gallery
      .gallery-line
        figure.card.slider-card(v-for='n in 5')
          img.img(src='../../assets/img/vrwoman.png')
          figcaption.title Dr Emmett Brown, DeLorean
      .gallery-line
        figure.card.slider-card(v-for='n in 5')
          img.img(src='../../assets/img/vrwoman.png')
          figcaption.title Dr Emmett Brown, DeLorean
    .overlay
    .modal.single-page
      article.gallery-card
        figure.gallery-img
          img(src='https://unsplash.it/1920/1080/?random' alt='News')
          figcaption.title Dr Emmett Brown, DeLorean
          h2.author Dr Emmet Brown
</template>

<script>
export default {
  name: 'catalog',
};
</script>

<style lang='scss' scoped>
@import '~style';

img{
  width: auto;
  height: 100%;
}
.catalog {
  height: 100vh;
  width: 100%;
  background-color: $color-lightgray;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 20%;
    width: 100%;
    background-color: $color-purple;
  }
}
.gallery {
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  position: absolute;
  left: 20%;
  height: 70%;
  width: 60%;
  bottom: 0;
  z-index: 100;
}
.gallery-line {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}
.slider-card {
  width: 15%;
  padding: 2rem;
  img {
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
}
.title {
  color: $color-gray;
}
.single-page{
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  display: none;
  justify-content: space-between;
  z-index: 1001;
  > .gallery-card {
    position: relative;
    width: 100%;
    top: auto;
    left: auto;
    height: 100%;
    background: $color-white;
    box-shadow: $shadow;
    display: flex;
    > .gallery-img{
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    > .title {
      position: absolute;
      left: 4rem;
      bottom: 10rem;
      padding-bottom: 2rem;
      font-size: 2.8rem;
      text-align: center;
      color: $color-white;
      }
    > .author {
      position: absolute;
      left: 4rem;
      bottom: 2rem;
      padding-bottom: 2rem;
      font-size: 2.8rem;
      text-align: center;
      color: $color-white;
    }
    }
  }
}
@media screen and (max-width: 1500px) {
  .intro-title {
    font-size: 12rem;
  }
  .intro-img {
    width: 40vw;
    height: 40vw;
    right: 14rem;
  }
}
@media screen and (max-width: 1100px) {
  .intro-title {
    position: absolute;
    top: 0;
    left: 15rem;
    font-size: 10rem;
    text-align: left;
  }
  .intro-img {
    width: 50vw;
    height: 50vw;
    right: 4rem;
  }
}
</style>
