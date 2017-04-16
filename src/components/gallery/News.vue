<template lang='pug'>
  .news
    h2.title.section-title news
    article.news-card
      figure.news-img
        img(src='https://unsplash.it/1920/1080/?random' alt='News')
        p.date 30 June
      .news-content
        h2.news-title Lorem ipsum dolor sit amet, consectetur adipisicing elit
        p.news-text
          |sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          |Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          |Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          |Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    .gallery
      article.news-card(v-for='n in 4')
        figure.news-img
          img(src='https://unsplash.it/1920/1080/?random' alt='News')
          p.date 30 June
        .news-content
          h2.news-title Lorem ipsum dolor sit amet, consectetur adipisicing elit
          p.news-text
            |sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            |Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            |Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            |Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    nav.news-nav
      a.nav-link
    p.notification scroll down to scroll the elements
</template>

<script>
export default {
  name: 'news',
};
</script>

<style lang='scss' scoped>
@import '~style';
img{
  width: auto;
  height: 100%;
}
.news {
  height: 100vh;
  width: 100%;
  background-color: $color-lightgray;
  position: relative;
  display: flex;
  align-items: center;
  &:after {
    position: absolute;
    content: "";
    top: 20%;
    right: 0;
    height: 60%;
    width: 70%;
    background-color: $color-purple;
  }
}
.news-card {
  position: absolute;
  top: calc(35% - 22%);
  left: calc(50% - 25%);
  width: 50%;
  height: 44%;
  background: $color-white;
  box-shadow: $shadow;
  display: flex;
  z-index: 50;
}
.news-img{
  flex-basis: 60%;
  height: 100%;
  overflow: hidden;
}
.news-content{
  flex: 1;
  padding: 4rem;
}
.gallery{
  position: absolute;
  top: calc(82% - 20%);
  left: calc(50% - 25%);
  width: 65%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  z-index: 50;
  > .news-card {
    position: relative;
    width: auto;
    top: auto;
    left: auto;
    flex-basis: 20%;
    height: 100%;
    background: $color-white;
    box-shadow: $shadow;
    display: flex;
    flex-direction: column;
    > .news-img{
      flex-basis: 50%;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
    > .news-content{
      flex: 1;
      padding: 1rem 2rem;
      .news-text {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1500px) {

}
@media screen and (max-width: 1100px) {

}
</style>
