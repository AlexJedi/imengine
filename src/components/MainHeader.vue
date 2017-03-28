<template lang='pug'>
  header.header
    div.header__logo
      a.logo__link
      h2.logo__name IMENGINE
    nav.header__nav
      a.nav__link(v-for='anchor in anchors'
      @click='') {{ anchor }}
      a.nav__link.nav__btn Try it now
</template>

<script>
export default {
  name: 'mainHeader',
  data() {
    return {
      anchors: ['About', 'Prise', 'Equipment', 'Gallery'],
    };
  },
  methods: {

  },
};
</script>

<style lang='scss'>
@import '~style';

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 $padding-page;
  color: $color-white;
  background-color: $color-blue;
  text-transform: uppercase;
  height: 10rem;
}
.header__logo, .header__nav {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.logo__link {
  width: 7rem;
  height: 7rem;
  margin-right: 1rem;
  background-image: url('../assets/logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.logo__name {
  margin: 0;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
}
.header__nav {
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
}
.nav__link {
  margin: 0 1rem;
}
.nav__btn {
  border: 1px solid $color-white;
  padding: 1rem 2rem;
  transition: 1s;
  &:hover {
    background-color: $color-white;
    color: $color-blue;
  }
}
</style>
