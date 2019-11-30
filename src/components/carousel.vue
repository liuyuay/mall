<template>
    <div class="myCarousel">
      <el-carousel :swiperData='swiperData' height="800px">
        <el-carousel-item v-for="(item,index) in swiperData" :key="index">
          <img :src="item" class="image">
        </el-carousel-item>
<!--        <el-carousel-item>-->
<!--          <img src="">-->
<!--        </el-carousel-item>-->
      </el-carousel>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'carousel',
  data () {
    return {
      swiperData: []
    }
  },
  mounted () {
    this.getIndexData()
  },
  methods: {
    getIndexData () {
      // 方法一
      // axios
      //   .get('/api/appData')
      //   .then(function (response) {
      //     console.log(response.data.data.swiper)
      // swiperData还未加载
      //     this.swiperData = response.data.data.swiper
      //     console.log('aaa' + this.swiperData)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })

      // 方法二
      axios.get('/api/index.json').then(res => {
        console.log(res)
        this.swiperData = res.data.swiper
        console.log(this.swiperData)
      })

      // 方法三
      // this.$http.get('/api/index.json',
      //   {params: {}}
      // ).then(function (res) {
      //   this.swiperData = res.data.swiper
      // }).catch(function () {
      // })
    }
  }
}
</script>

<style scoped>
</style>
