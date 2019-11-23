<template>
    <div class="home">
      <MyHeader></MyHeader>
      <Carousel></Carousel>
    </div>
</template>

<script>
import MyHeader from '@/components/header'
import Carousel from '@/components/carousel'
export default {
  name: 'home',
  components: {
    MyHeader,
    Carousel
  }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
</style>
