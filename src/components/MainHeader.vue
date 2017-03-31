<template lang='pug'>
  header.header
    div.header__logo
      a.logo__link
      h2.logo__name IMENGINE
    nav.header__nav
      a.header__link(v-for='anchor in anchors'
      @click='') {{ anchor }}
      a.header__link.nav__btn Try it now
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
  display: block;
  width: 7rem;
  height: 7rem;
  margin-right: 1rem;
  background: url('../assets/logo.svg') no-repeat center / contain;
}
.logo__name {
  margin: 0;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
}
.header__nav {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
}
.header__link {
  margin: 0 1rem;
}
.nav__btn {
  border: 1px solid $color-white;
  padding: 1rem 2rem;
  &:hover {
    background-color: $color-white;
    color: $color-blue;
  }
}
</style>
