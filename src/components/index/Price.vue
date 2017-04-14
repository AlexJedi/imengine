<template lang='pug'>
  .price
    .price__container
      .card.price__card(v-for='n in 3')
        .line.card__line
        .card__time
          h2.time__title 30
          span.time__subtitle min
        .card__values
          span (main/student/school)
          span.values__list 600/550/500
        p.card__description
          | Hendrerit delicatissimi an cum, quo ea zril aperiri albucius. Vel te
          | vero vocent prompta, mei ferri antiopam corrumpit ut.
    a.btn.price__action Book now
</template>

<script>
export default {
  name: 'price',
};
</script>

<style lang='scss'>
@import '~style';

.price {
  background: linear-gradient(to bottom, $color-blue 0%, $color-purple 100%);;
  padding: $padding-page;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.price__container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
}
.price__card {
  width: 20%;
  position: relative;
}
.card__line {
  position: absolute;
  top: 3rem;
  left: 0;
  height: 6rem;
  background-color: $color-purple;
}
.time__title {
  font-size: 7rem;
  margin: 0;
}
.time__subtitle {
  display: block;
  font-size: 2rem;
  font-weight: 500;
}
.card__time,
.card__values {
  margin-bottom: 3rem;
}
.values__list {
  display: block;
  font-size: 3.2rem;
  font-weight: 500;
  margin-top: 2rem;
}
</style>
