<template lang='pug'>
  .index
    main-header
    intro
    about
    price
    equipment
    slider
    comments
    main-footer
</template>

<script>
import MainHeader from './index/MainHeader';
import MainFooter from './index/MainFooter';
import Intro from './index/Intro';
import About from './index/About';
import Price from './index/Price';
import Equipment from './index/Equipment';
import Slider from './index/Slider';
import Comments from './index/Comments';

export default {
  name: 'index',
  components: {
    MainHeader,
    Intro,
    About,
    Price,
    Equipment,
    Slider,
    Comments,
    MainFooter,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
