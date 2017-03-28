<template lang='pug'>
  .intro
    h1.intro__title Virtual #[span reality] experience
    div.intro__img
</template>

<script>
export default {
  name: 'intro',
};
</script>

<style lang='scss'>
@import '~style';

.intro {
  height: 70vh;
  width: 100%;
  background-color: $color-blue;
  position: relative;
  display: flex;
  align-items: center;
}
.intro__title {
  font-size: 12rem;
  text-transform: uppercase;
  text-align: center;
  color: $color-white;
  text-shadow: 0px 2px 7px #1B85BE;
  user-select: none;
  pointer-events: none;
  span {
    color: $color-dark;
  }
}
.intro__img {
  width: 50rem;
  height: 47rem;
  position: absolute;
  bottom: 0;
  right: 20rem;
  background: url('../../assets/img/vrman.png') no-repeat center bottom / contain;
}
</style>
