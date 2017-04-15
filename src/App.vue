<template lang='pug'>
  .app
    router-view
</template>

<script>
export default {
  name: 'app',
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
