<template lang='pug'>
  .about
    article.article
      .article-nav
        span.nav-number.nav-number--active 01
          span.line
        span.nav-number 02
          span.line
        span.nav-number 03
          span.line
      .article-content
        .article-header
          span.line.article-line
          span.article-tip Latest article
        h2.article-title.section-title Reality or not?
        figure.article-img
          img(src='../../assets/img/glasses.png')
        .article-info
          a.like 44
          span Today, in Tech
        a.btn.article-action Read more
    .content
      .about
        p.description
          | 8-bit aesthetic kitsch 90's humblebrag. Gastropub tacos hoodie
          | letterpress, banjo normcore trust fund hella. Kinfolk gluten-free
          | lo-fi quinoa. Pabst kitsch ennui hoodie meggings banjo. Schlitz tacos
          | kitsch godard before they sold out. Kale…
        .video
      .add
        p.description
          | 8-bit aesthetic kitsch 90's humblebrag. Gastropub tacos hoodie
          | letterpress, banjo normcore trust fund hella. Kinfolk gluten-free
          | lo-fi quinoa. Pabst kitsch ennui hoodie meggings banjo. Schlitz tacos
          | kitsch godard before they sold out. Kale…
        .video
    .banner
      .banner-img
      span.line.banner-line
      .banner-text
        p
          | 8-bit aesthetic kitsch 90's humblebrag. Gastropub tacos hoodie
          | letterpress, banjo normcore trust fund hella. Kinfolk gluten-free
          | lo-fi quinoa.
        p
          | Pabst kitsch ennui hoodie meggings banjo. Schlitz tacos kitsch godard
          | before they sold out. Kale chips chillwave kickstarter photo booth
          | cronut cold-pressed.
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang='scss' scoped>
@import '~style';

.about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.article {
  position: absolute;
  top: -16rem;
  left: 11rem;
  color: $color-dark;
  display: flex;
  justify-content: space-between;
}
.article-nav {
  margin-right: 5rem;
  margin-top: 13rem + $padding-page;
}
.nav-number {
  display: flex;
  justify-content: space-between;
  width: 5rem;
  font-size: 2.4rem;
  margin-bottom: 2rem;
}
.nav-number--active .line {
  opacity: 1;
}
.article-content {
  width: 50rem;
  padding: 2rem 0 6rem;
  border-radius: $border-radius;
  background-color: $color-white;
  box-shadow: $shadow;
  position: relative;
}
.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 $padding-section 0 6rem;
}
.line {
  display: block;
  width: 0.5rem;
  background-color: $color-gray;
  opacity: 0.5;
}
.article-line {
  height: 0.5rem;
  width: 50%;
}
.article-tip {
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
.section-title {
  font-size: 4.8rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  margin: 0;
  color: $color-dark;
}
.article-title {
  padding: 2rem 6rem;
}
.article-img {
  background-color: $color-blue;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.article-info {
  height: 5rem;
  padding: 0 4rem;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.like {
  color: $color-gray;
  background: url('../../assets/img/icons/heart.svg') no-repeat left center;
  padding-left: 2rem;
}
.article-action {
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 8rem);
  z-index: 10;
}
.content {
  width: 60%;
  display: flex;
}
.add {
  padding: $padding-page / 2;
}
.about {
  padding: $padding-page / 2;
}
.video {
  width: 100%;
  height: 30rem;
  background-color: $color-gray;
}
.banner {
  align-self: stretch;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0 $padding-page;
  background-color: $color-lightgray;
}
.banner-img {
  position: absolute;
  bottom: 0;
  left: $padding-page / 2;
  width: 30%;
  height: 37rem;
  background: url('../../assets/img/vrwoman.png') no-repeat center bottom / contain;
}
.banner-line {
  height: $padding-page * 1.5;
  align-self: center;
}
.banner-text {
  width: 60%;
  padding: 4rem;
}
@media screen and (max-width: 1500px) {
  .article {
    left: 6rem;
    top: -14rem;
  }
  .add {
    display: none;
  }
  .content{
    width: 50%;
  }

}
@media screen and (max-width: 1100px) {
  img {
    width: 100%;
  }
  .article {
    top: -8rem;
  }
  .article-content {
    width: 35rem;
    padding: 2rem 0 6rem;
  }
  .aricle-header {
    padding: 0 4rem;
  }
  .article-header {
    padding: 0 4rem;;
  }
  .article-tip {
    font-size: 1.4rem;
    flex-basis: 40%;
  }
  .article-line {
    flex-basis: 50%;
  }
  .section-title {
    font-size: 3.8rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin: 0;
    color: $color-dark;
  }
  .article-title {
    padding: 2rem 4rem;
  }
  .article-img {
    background-color: $color-blue;
    height: 22rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .about {
    padding: 3rem;
  }
  .banner-text {
    padding: 3rem;
  }
}
</style>
