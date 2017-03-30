<template lang='pug'>
  .app
    main-header
    index
    main-footer
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';

import Index from '@/components/Index';

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter,
    Index,
  },
};
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&subset=cyrillic');
@import '~style';

html {
  font-size: 62.5%;
}
body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  position: relative;
  color: $color-gray;
}
</style>
