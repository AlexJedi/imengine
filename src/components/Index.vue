<template lang='pug'>
  .index
    intro
    about
</template>

<script>
import Intro from './index/Intro';
import About from './index/About';

export default {
  name: 'index',
  components: {
    Intro,
    About,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
