<template lang='pug'>
  .comments
    .comments__card.card(v-for='n in 3')
      .card__quote
      p.card__description
        | Hendrerit delicatissimi an cum, quo ea zril aperiri albucius. Vel te
        | vero vocent prompta, mei ferri antiopam corrumpit ut.
      .card__author
        span.author__name Dr Emmett Brown, DeLorean
        .author__img
</template>

<script>
export default {
  name: 'commets',
};
</script>

<style lang='scss'>
@import '~style';

.comments {
  background: linear-gradient(to bottom, $color-purple 0%, $color-blue 100%);;
  padding: $padding-page;
  display: flex;
  justify-content: space-between;
}
.comments__card {
  width: 20%;
  box-shadow: $shadow;
}
.card__quote {
  width: 8rem;
  height: 8rem;
}
.card__author {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
.author__name {
  font-size: 2rem;
  font-weight: 500;
  color: $color-dark;
  margin-bottom: 1.5rem;
}
.author__img {
  border-radius: 50%;
  background-color: $color-blue;
  width: 8rem;
  height: 8rem;
}
</style>
