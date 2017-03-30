<template lang='pug'>
  .index
    intro
    about
    prise
    equipment
</template>

<script>
import Intro from './index/Intro';
import About from './index/About';
import Prise from './index/Prise';
import Equipment from './index/Equipment';

export default {
  name: 'index',
  components: {
    Intro,
    About,
    Prise,
    Equipment,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
