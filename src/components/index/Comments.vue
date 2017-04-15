<template lang='pug'>
  .comments
    .comments-card.card(v-for='n in 3')
      .quote
      p.description
        | Hendrerit delicatissimi an cum, quo ea zril aperiri albucius. Vel te
        | vero vocent prompta, mei ferri antiopam corrumpit ut.
      .author
        span.author-name Dr Emmett Brown, DeLorean
        .author-img
</template>

<script>
export default {
  name: 'commets',
};
</script>

<style lang='scss' scoped>
@import '~style';

.comments {
  background: linear-gradient(to bottom, $color-purple 0%, $color-blue 100%);;
  padding: $padding-page;
  display: flex;
  justify-content: space-between;
}
.comments-card {
  width: 20%;
  box-shadow: $shadow;
}
.quote {
  width: 8rem;
  height: 8rem;
}
.author {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}
.author-name {
  font-size: 2rem;
  font-weight: 500;
  color: $color-dark;
  margin-bottom: 1.5rem;
}
.author-img {
  border-radius: 50%;
  background-color: $color-blue;
  width: 8rem;
  height: 8rem;
}
</style>
