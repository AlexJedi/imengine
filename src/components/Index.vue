<template lang='pug'>
  .index
    intro
    about
    prise
    equipment
    comments
</template>

<script>
import Intro from './index/Intro';
import About from './index/About';
import Prise from './index/Prise';
import Equipment from './index/Equipment';
import Comments from './index/Comments';

export default {
  name: 'index',
  components: {
    Intro,
    About,
    Prise,
    Equipment,
    Comments,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
