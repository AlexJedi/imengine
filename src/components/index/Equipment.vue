<template lang='pug'>
  .equipment
    .equipment__content
      .equipment__description
        h2.equipment__title.section__title EQUIPMENT &amp; DEVICES
        p.description__text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn View Gallery
    .equipment__img-box
      h3.img-box__title HTC Vive
      .equipment__img
    .equipment__experience.card
      h4.experience__title Feel the spirit of adventure
      p.experience__description(v-for='n in 2')
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        | eiusmod tempor incididunt ut.
      a.experience__action.btn Read more
    .equipment__video
</template>

<script>
export default {
  name: 'equipment',
};
</script>

<style lang='scss'>
@import '~style';

.equipment {
  background-color: $color-purple;
  padding: $padding-page;
  position: relative;
}
.equipment__content {
  width: 100%;
  background-color: $color-white;
  border-radius: $border-radius;
  margin-bottom: 25rem;
}
.equipment__description {
  width: 40%;
  padding: 8rem 8rem 14rem;
}
.equipment__title,
.description__text {
  margin-bottom: 3rem;
}
.equipment__img-box {
  position: absolute;
  top: 20rem;
  right: $padding-page * 2;
}
.img-box__title {
  text-transform: uppercase;
  font-size: 3.6rem;
  letter-spacing: 0.3rem;
  text-align: center;
  color: $color-dark;
  font-weight: 500;
  margin-bottom: 2rem;
}
.equipment__img {
  width: 40rem;
  height: 40rem;
  background:
    url('../../assets/img/htc.png') no-repeat center center / 80%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.equipment__video {
  width: 90rem;
  height: 40rem;
  background-color: $color-gray;
  margin: 0 auto;
}
.equipment__experience {
  position: absolute;
  bottom: 35rem;
  left: $padding-page * 2;
  width: 25rem;
}
.experience__title {
  width: 60%;
  font-size: 2rem;
  color: $color-dark;
  font-weight: 500;
  margin: 0 0 3rem;
}
.experience__description {
  margin-top: 0;
  margin-bottom: 3rem;
  padding: 0;
}
</style>
