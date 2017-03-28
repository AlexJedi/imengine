<template lang='pug'>
  .about
    .about__article
      .article__nav
        span.nav__number.nav__number--active 01
          span.line
        span.nav__number 02
          span.line
        span.nav__number 03
          span.line
      .article__content
        header.article__header
          span.line.header__line
          span.header__title Latest article
        h2.article__title Reality or not?
        figure.article__img
          img(src='../../assets/img/glasses.png')
        .article__info
          a.like 44
          span Today, in Tech
        a.btn.article__action Read more
    .about__content
      p.about__description
        | 8-bit aesthetic kitsch 90's humblebrag. Gastropub tacos hoodie
        | letterpress, banjo normcore trust fund hella. Kinfolk gluten-free
        | lo-fi quinoa. Pabst kitsch ennui hoodie meggings banjo. Schlitz tacos
        | kitsch godard before they sold out. Kale…
      .about__video
    .about__banner
      .banner__img
      span.line.banner__line
      .banner__text
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

<style lang='scss'>
@import '~style';

.about {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: $color-gray;
}
.about__article {
  position: absolute;
  top: -10rem;
  left: 5rem;
  color: $color-dark;
  display: flex;
  justify-content: space-between;
}
.article__nav {
  margin-right: 5rem;
  margin-top: 13rem + $padding-page;
}
.nav__number {
  display: flex;
  justify-content: space-between;
  width: 5rem;
  font-size: 2.4rem;
  margin-bottom: 2rem;
}
.nav__number--active .line {
  opacity: 1;
}
.article__content {
  width: 50rem;
  padding: 2rem 0;
  border-radius: 5px;
  background-color: $color-white;
  box-shadow: $shadow;
}
.article__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 6rem;
}
.line {
  display: block;
  width: 0.5rem;
  background-color: $color-gray;
  opacity: 0.5;
}
.header__line {
  height: 0.5rem;
  width: 50%;
}
.header__title {
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
}
.article__title {
  font-size: 4.8rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  padding: 2rem 6rem;
  margin: 0;
}
.article__img {
  background-color: $color-blue;
  height: 28rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.article__info {
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
  background: url('../../assets/img/heart.svg') no-repeat left center;
  padding-left: 2rem;
}
.article__action {
  margin: 0 auto;
}
.about__content {
  width: 40%;
  padding: $padding-page;
}
.about__video {
  width: 100%;
  height: 30rem;
  background-color: $color-gray;
}
.about__banner {
  align-self: stretch;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0 $padding-page;
  background-color: $color-lightgray;
}
.banner__img {
  position: absolute;
  bottom: 0;
  left: $padding-page / 2;
  width: 30%;
  height: 40rem;
  background: url('../../assets/img/vrwoman.png') no-repeat center bottom / contain;
}
.banner__line {
  height: $padding-page * 1.5;
  align-self: center;
}
.banner__text {
  width: 60%;
  padding: 4rem;
}
</style>
