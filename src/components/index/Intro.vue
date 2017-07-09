<template lang='pug'>
  .intro
    h1.intro-title Virtual #[span reality] experience
    .intro-img
    ul.intro-social
      a.link-social.link-facebook
        span F
      a.link-social.link-twitter
        span T
      a.link-social.link-vk
        span V
    video.intro-video
      source(src='../../assets/img/video.mp4', type='video/mp4')
</template>

<script>
export default {
  name: 'intro',
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
  z-index: 10;
  bottom: 0;
  right: 20rem;
  background: url('../../assets/img/vrman.png') no-repeat center bottom / contain;
}
.intro-social {
  position: absolute;
  bottom: 7rem;
  right: 3rem;
  width: 4rem;
  height: 16rem;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.link-social {
  flex-basis: 25%;
  position: relative;
  width: 4rem;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: $color-white;
    transition: 0.3s;
  }
  &:hover span{
    color: $color-blue;
    transition: 0.3s;
  }
  span {
    position: absolute;
    top: 30%;
    left: 35%;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
}
.intro-video {
  width: 100%;
  height: calc(100% + 14rem);
  position: absolute;
  top: -14rem;
  left: 0;
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
