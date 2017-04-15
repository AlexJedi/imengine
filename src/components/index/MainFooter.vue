<template lang='pug'>
  footer.footer
    .company
      .company-info
        h4.company-name IMENGINE
        p.company-description
          | An experience design collective curated by designers, for designers.
      a.logo-link.logo
    .footer-nav
      .nav
        a.footer-link(v-for='anchor in anchors'
        @click='') {{ anchor }}
      a.licence Licence
    p.copyright
      | IMENGINE 2017. Design &amp; Development by #[span PXLHEAD]
</template>

<script>
export default {
  name: 'mainFooter',
  data() {
    return {
      anchors: ['About', 'Prise', 'Equipment', 'Gallery'],
    };
  },
};
</script>

<style lang='scss' scoped>
@import '~style';

.footer {
  background-color: $color-dark;
  color: $color-white;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
}
.company {
  background-color: $color-blue;
  padding: 2rem $padding-page;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.company-name {
  font-weight: 400;
  letter-spacing: 0.5rem;
}
.footer-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 3rem $padding-page;
}
.footer-link {
  margin-right: 4rem;
}
.copyright {
  color: $color-gray;
  padding: 0 $padding-page;
  span {
    color: $color-blue;
  }
}
</style>
