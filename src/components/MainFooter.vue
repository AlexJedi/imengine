<template lang='pug'>
  footer.footer
    .footer__company
      .company__info
        h4.company__name IMENGINE
        p.company__description
          | An experience design collective curated by designers, for designers.
      a.logo__link.company__logo
    .footer__nav
      .nav__page
        a.footer__link(v-for='anchor in anchors'
        @click='') {{ anchor }}
      a.footer__licence Licence
    p.footer__copyright
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

<style lang='scss'>
@import '~style';

.footer {
  background-color: $color-dark;
  color: $color-white;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
}
.footer__company {
  background-color: $color-blue;
  padding: 2rem $padding-page;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.company__logo {
  margin: 0;
}
.company__name {
  font-weight: 400;
  letter-spacing: 0.5rem;
}
.footer__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 3rem $padding-page;
}
.footer__link {
  margin-right: 4rem;
}
.footer__copyright {
  color: $color-gray;
  padding: 0 $padding-page;
  span {
    color: $color-blue;
  }
}
</style>
