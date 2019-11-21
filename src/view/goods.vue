<template>
  <div class="goods">
    This is goods page
    <br/>
    <span>This is me gets params by query {{$route.query.goodsId}}</span>
    <br/>
    <span>This is me gets params by params {{$route.params.goodsId}}</span>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
