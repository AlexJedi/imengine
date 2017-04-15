<template lang='pug'>
  .gallery
    start
    news
    catalog
    sponsors
</template>

<script>
import Start from './gallery/Start';
import News from './gallery/News';
import Catalog from './gallery/Catalog';
import Sponsors from './gallery/Sponsors';

export default {
  name: 'gallery',
  components: {
    Start,
    News,
    Catalog,
    Sponsors,
  },
};
</script>

<style lang='scss'>
.gallery {
  width: 100%;
}
</style>
