<template lang='pug'>
  .intro
    h1.intro-title Virtual #[span reality] experience
    div.intro-img
</template>

<script>
export default {
  name: 'catalog',
};
</script>

<style lang='scss' scoped>
@import '~style';

.intro {
  height: 70vh;
  width: 100%;
  background-color: $color-blue;
  position: relative;
  display: flex;
  align-items: center;
}
.intro-title {
  font-size: 14rem;
  text-transform: uppercase;
  text-align: center;
  color: $color-white;
  text-shadow: 0px 2px 7px #1B85BE;
  user-select: none;
  pointer-events: none;
  width: 80%;
  span {
    color: $color-dark;
  }
}
.intro-img {
  width: 35vw;
  height: 35vw;
  position: absolute;
  bottom: 0;
  right: 20rem;
  background: url('../../assets/img/vrman.png') no-repeat center bottom / contain;
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
