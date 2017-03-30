<template lang='pug'>
  .index
    intro
    about
    prise
</template>

<script>
import Intro from './index/Intro';
import About from './index/About';
import Prise from './index/Prise';

export default {
  name: 'index',
  components: {
    Intro,
    About,
    Prise,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
