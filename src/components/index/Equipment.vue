<template lang='pug'>
  .equipment
    .card.card-equipment
      .description
        h2.title EQUIPMENT &amp; DEVICES
        p.text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn.equipment-action View Gallery
        .img-htc.img
        .number 01
    .card.card-equipment.card-equipment--left
      .description
        h2.title EQUIPMENT &amp; DEVICES
        p.text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn.equipment-action View Gallery
        .img-pc.img
        .number.number--left 02
    .card.card-equipment
      .description
        h2.title EQUIPMENT &amp; DEVICES
        p.text
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          | eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          | minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          | aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          | in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        a.btn.equipment-action View Gallery
        .img-controllers.img
        .number 03
</template>

<script>
export default {
  name: 'equipment',
};
</script>

<style lang='scss' scoped>
@import '~style';

.equipment {
  background-color: $color-purple;
  padding: $padding-page;
  position: relative;
}
.card-equipment {
  padding: 8rem;
  margin-bottom: 20rem;
  margin-left: 33%;
  align-items: flex-start;
  text-align: left;
  position: relative;
  width: 55%;
}
.card-equipment--left {
  align-items: flex-end;
  margin-left: 0;
}
.description {
  width: 50%;
}
.title,
.text {
  margin-top: 0;
  margin-bottom: 3rem;
}
.img {
  position: absolute;
  bottom: 15rem;
  right: 8rem;
  width: 40rem;
  height: 40rem;
  border-radius: $border-radius;
  background: linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.img-htc {
  background:
    url('../../assets/img/htc.png') no-repeat center center / 80%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.img-pc {
  right: auto;
  left: 8rem;
  background:
    url('../../assets/img/pc.png') no-repeat center center / 60%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.img-controllers {
  background:
    url('../../assets/img/controllers.png') no-repeat center center / 80%,
    linear-gradient(to bottom, rgba(235,195,253,1) 0%, rgba(134,197,252,1) 100%);
}
.number {
  position: absolute;
  bottom: -18rem;
  right: -2rem;
  font-size: 25rem;
  font-weight: 700;
  color: darken($color-lightgray, 3);
  user-select: none;
  pointer-events: none;
}
.number--left {
  right: auto;
  left: 2rem;
  color: $color-blue;
}
@media screen and (max-width: 1500px) {
  .card-equipment {
    width: auto;
    margin-left: 0;
    margin-bottom: 25rem;
  }
}
@media screen and (max-width: 1500px) {

}
</style>
