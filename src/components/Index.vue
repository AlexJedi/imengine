<template lang='pug'>
  .index
    intro
</template>

<script>
import Intro from './index/Intro';

export default {
  name: 'index',
  components: {
    Intro,
  },
};
</script>

<style lang='scss'>
.index {
  width: 100%;
}
</style>
