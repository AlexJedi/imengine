<template lang='pug'>
  .equipment
    .card.equipment__card
      .equipment__description
        h2.equipment__title.section__title EQUIPMENT &amp; DEVICES
        p.description__text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn.equipment__action View Gallery
        .img__htc.equipment__img
        .equipment__number 01
    .card.equipment__card.equipment__card--left
      .equipment__description
        h2.equipment__title.section__title EQUIPMENT &amp; DEVICES
        p.description__text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn.equipment__action View Gallery
        .img__pc.equipment__img
        .equipment__number.equipment__number--left 02
    .card.equipment__card
      .equipment__description
        h2.equipment__title.section__title EQUIPMENT &amp; DEVICES
        p.description__text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn.equipment__action View Gallery
        .img__controllers.equipment__img
        .equipment__number 03
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
.equipment__card {
  padding: 8rem;
  margin-bottom: 25rem;
  align-items: flex-start;
  text-align: left;
  position: relative;
}
.equipment__card--left {
  align-items: flex-end;
}
.equipment__description {
  width: 50%;
}
.equipment__title,
.description__text {
  margin-top: 0;
  margin-bottom: 3rem;
}
.equipment__img {
  position: absolute;
  bottom: 15rem;
  right: 8rem;
  width: 40rem;
  height: 40rem;
  border-radius: $border-radius;
  background: linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.img__htc {
  background:
    url('../../assets/img/htc.png') no-repeat center center / 80%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.img__pc {
  right: auto;
  left: 8rem;
  background:
    url('../../assets/img/pc.png') no-repeat center center / 60%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.img__controllers {
  background:
    url('../../assets/img/controllers.png') no-repeat center center / 80%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.equipment__number {
  position: absolute;
  bottom: -18rem;
  right: -2rem;
  font-size: 25rem;
  font-weight: 700;
  color: $color-lightgray;
  user-select: none;
  pointer-events: none;
}
.equipment__number--left {
  right: auto;
  left: 2rem;
  color: $color-blue;
}
</style>
