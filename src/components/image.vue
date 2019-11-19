<template>
  <div class="demo-image__preview">
    <el-image
      style="width: 100px; height: 100px"
      :src="url"
      :preview-src-list="srcList">
    </el-image>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '../static/img/avatar.jpeg',
      srcList: [
        '../static/image/a.jpg',
        '../static/image/b.jpg'
      ]
    }
  }
}
</script>

<style scoped>

</style>
