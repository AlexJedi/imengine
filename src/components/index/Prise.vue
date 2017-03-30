<template lang='pug'>
  .prise
    .prise__card.card(v-for='n in 3')
      .card__line.line
      .card__time
        h2.time__title 30
        span.time__subtitle min
      .card__values
        span (main/student/school)
        span.values__list 600/550/500
      p.card__description
        | Hendrerit delicatissimi an cum, quo ea zril aperiri albucius. Vel te
        | vero vocent prompta, mei ferri antiopam corrumpit ut.
</template>

<script>
export default {
  name: 'prise',
};
</script>

<style lang='scss'>
@import '~style';

.prise {
  background-color: $color-blue;
  padding: $padding-page;
  display: flex;
  justify-content: space-between;
}
.prise__card {
  width: 20%;
  position: relative;
  box-shadow: $shadow;
}
.card {
  border-radius: $border-radius;
  background-color: $color-white;
  padding: $padding-section;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
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
