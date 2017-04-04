<template lang='pug'>
  .index
    intro
    about
    price
    equipment
    gallery
    comments
</template>

<script>
import Intro from './index/Intro';
import About from './index/About';
import Price from './index/Price';
import Equipment from './index/Equipment';
import Gallery from './index/Gallery';
import Comments from './index/Comments';

export default {
  name: 'index',
  components: {
    Intro,
    About,
    Price,
    Equipment,
    Gallery,
    Comments,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
