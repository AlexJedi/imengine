<template lang='pug'>
  .start
    .logo
      a.logo-link
      h2.logo-name IMENGINE
    .extra-title VR
    h1.title #[span gall] ery
    p.text
      | Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      | Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      | Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    .intro-img
    a.btn-menu
    aside.menu
      nav.menu-nav
        a.menu-link
</template>

<script>
export default {
  name: 'start',
};
</script>

<style lang='scss' scoped>
@import '~style';
.btn-menu {
  position: fixed;
  z-index: 1000;
  content: "";
  width: 6rem;
  height: 6rem;
  top: 7rem;
  left: 6rem;
  background: url('../../assets/img/icons/menu.svg') no-repeat center / contain;
  &:hover + .menu{
    transform: translateX(0);
  }
}
.menu {
  position: fixed;
  z-index: 1001;
  top: calc(50% - 25vh);
  left: 0;
  width: 15rem;
  height: 50vh;
  background: $color-lightgray;
  transform: translateX(-100%);
  transition: transform 1s ease-in;
}
.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 7%;
  left: 18%;
}
.logo-link {
  display: block;
  width: 7rem;
  height: 7rem;
  margin-right: 1rem;
  background: url('../../assets/logo-dark.svg') no-repeat center / contain;
}
.logo-name {
  margin: 0;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
}
.start {
  height: 100vh;
  width: 100%;
  background-color: $color-white;
  position: relative;
  display: flex;
  align-items: center;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 30%;
    background-color: $color-lightgray;
  }
}
.text {
  position: absolute;
  font-size: 1.8rem;
  top: 21%;
  left: 21%;
  width: 54rem;
}
.title {
  position: absolute;
  top: 50%;
  left: 57%;
  font-size: 20rem;
  text-transform: uppercase;
  text-align: center;
  color: $color-white;
  // text-shadow: 0px 2px 7px #1B85BE;
  user-select: none;
  pointer-events: none;
      z-index: 150;
  span {
    position: absolute;
    top: 0;
    left: -142%;
    z-index: 150;
    color: $color-dark;
  }
}
.extra-title {
  position: absolute;
  top: calc(50% - 13rem);
  left: 32rem;
  font-size: 55rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: $color-red;
  // text-shadow: 0px 2px 7px #1B85BE;
  user-select: none;
  pointer-events: none;
}
.intro-img {
  width: 40%;
  height: 80%;
  position: absolute;
  z-index: 100;
  top: 10%;
  right: 20rem;
  background: url('../../assets/img/VR-Gallery.jpg') no-repeat center bottom / contain;
}
@media screen and (max-width: 1500px) {
  .text {
    width: 41rem;
  }
  .intro-img {
    right: 15rem;
  }
  .extra-title {
    top: calc(50% - 10rem);
    left: 25rem;
    font-size: 35rem;
  }
  .title {
    top: 55%;
    left: 53%;
    font-size: 17rem;
  }
}
@media screen and (max-width: 1100px) {
  .text {
    width: 25rem;
    height: 15rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .intro-img {
    right: 10rem;
  }
  .extra-title {
    top: calc(50% - 5rem);
    left: 18rem;
    font-size: 25rem;
  }
  .title {
    top: 55%;
    left: 51%;
    font-size: 13rem;
  }
}
</style>
