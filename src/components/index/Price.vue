<template lang='pug'>
  .price
    .container
      .card.price-card(v-for='n in 3')
        .line.card-line
        .time
          h2.time-title 30
          span.time-subtitle min
        .values
          span (main/student/school)
          span.values-list 600/550/500
        p.description
          | Hendrerit delicatissimi an cum, quo ea zril aperiri albucius. Vel te
          | vero vocent prompta, mei ferri antiopam corrumpit ut.
    a.btn.price-action Book now
</template>

<script>
export default {
  name: 'price',
};
</script>

<style lang='scss' scoped>
@import '~style';

.price {
  // background: $color-purple;
  padding: $padding-page;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
}
.price-card {
  width: 19%;
  position: relative;
}
.card-line {
  position: absolute;
  top: 3rem;
  left: 0;
  height: 6rem;
  width: 0.6rem;
  background-color: $color-purple;
}
.time-title {
  font-size: 7rem;
  margin: 0;
}
.time-subtitle {
  display: block;
  font-size: 2rem;
  font-weight: 500;
}
.time,
.values {
  margin-bottom: 3rem;
}
.values-list {
  display: block;
  font-size: 3.2rem;
  font-weight: 500;
  margin-top: 2rem;
}
@media screen and (max-width: 1500px) {
  .price-card {
    width: 20%;
  }
  .container {
    width: 100%;
  }
}
@media screen and (max-width: 1100px) {
  .time {
    margin-bottom: 0.5rem;
  }
}
</style>
