<template lang='pug'>
  header.header
    .logo
      a.logo-link
      h2.logo-name IMENGINE
    nav.main-nav
      a.nav-link(v-for='anchor in anchors'
      @click='') {{ anchor }}
      a.nav-link.nav-btn Try it now
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

<style lang='scss' scoped>
@import '~style';

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 $padding-page;
  color: $color-white;
  background-color: $color-blue;
  text-transform: uppercase;
  height: 14rem;
}
.logo, .main-nav {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.logo-link {
  display: block;
  width: 7rem;
  height: 7rem;
  margin-right: 1rem;
  background: url('../../assets/logo.svg') no-repeat center / contain;
}
.logo-name {
  margin: 0;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.4rem;
}
.main-nav {
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
}
.nav-link {
  margin: 0 1rem;
  padding: 1rem 0;
  border: 1px solid $color-blue;
  transition: all 0.3s ease-in;
  &:hover {
    border-bottom: 1px solid $color-white;
  }
}
.nav-btn {
  border: 1px solid $color-white;
  padding: 1rem 2rem;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: $color-white;
    color: $color-blue;
  }
}
@media screen and (max-width: 1500px) {
  .header {
    height: 10rem;
  }
}
@media screen and (max-width: 1100px) {
  .header {
    height: 10rem;
  }
  .logo-link {
    display: block;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    background: url('../../assets/logo.svg') no-repeat center / contain;
  }
  .logo-name {
    margin: 0;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.4rem;
  }
  .main-nav {
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
  .nav-link {
    margin: 0 1rem;
  }
  .nav-btn {
    border: 1px solid $color-white;
    padding: 1rem 2rem;
    &:hover {
      background-color: $color-white;
      color: $color-blue;
    }
  }
}
</style>
