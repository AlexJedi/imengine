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
      a.nav-link.link-left
      a.nav-link.link-right
    nav.news-category
      a.category-link.link-all
      a.category-link.link-club
      a.category-link.link-tech
      a.category-link.link-game
    p.notification scroll
    .overlay
    .modal.single-page
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
    height: 63%;
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
  flex-basis: 50%;
  height: 100%;
  overflow: hidden;
}
.news-content{
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
}
.news-text {
  text-overflow: ellipsis;;
  overflow: scroll;
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
      flex-basis: 60%;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
      .date {
        position: absolute;
        bottom: 11rem;
        left: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 1rem;
        background: $color-purple;
        color: $color-white;
      }
    }
    > .news-content{
      flex: 1;
      padding: 1rem 2rem;
      .news-title {
        font-size: 1.8rem;
      }
      .news-text {
        display: none;
      }
    }
  }
}
.nav-link {
  position: absolute;
  right: 15%;
  top: 40%;
  width: 6rem;
  height: 6rem;
  z-index: 200;
}
.link-left {
  top: 30%;
  background: url('../../assets/img/icons/up.svg') no-repeat center / contain;
}
.link-right {
  top: 45%;
  background: url('../../assets/img/icons/down.svg') no-repeat center / contain;
}
.notification {
  position: absolute;
  display: block;
  right: 14.7%;
  top: 37.5%;
  width: 6rem;
  height: 6rem;
  z-index: 200;
  font-size: 20px;
  color: $color-white;
  font-weight: 600;
}

.news-category {
  position: absolute;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 18%;
  top: 35%;
  width: 5rem;
  height: 30rem;
  z-index: 200;
}
.category-link {
  flex-basis: 20%;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
.link-all {
  background: url('../../assets/img/icons/all.svg') no-repeat left center;
}
.link-game {
  background: url('../../assets/img/icons/game.svg') no-repeat left center;
}
.link-tech {
  background: url('../../assets/img/icons/tech.svg') no-repeat left center;
}
.link-club {
  background: url('../../assets/img/icons/club.svg') no-repeat left center;
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
  > .news-card {
    position: relative;
    width: auto;
    top: auto;
    left: auto;
    height: 100%;
    background: $color-white;
    box-shadow: $shadow;
    display: flex;
    > .news-img{
      flex-basis: 40%;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
      .date {
        position: absolute;
        bottom: 6rem;
        left: 5rem;
        font-size: 2rem;
        font-weight: 500;
        padding: 2rem;
        background: $color-purple;
        color: $color-white;
      }
    }
    > .news-content{
      flex: 1;
      padding: 5rem;
      .news-title {
        padding-bottom: 2rem;
        font-size: 2.8rem;
        text-align: center;
      }
      .news-text {
        padding: 2rem;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .news-card:last-child {
    display: none;
  }
  .gallery{
    > .news-card {
      flex-basis: 30%;
    }
  }
}
@media screen and (max-width: 1100px) {

}
</style>
