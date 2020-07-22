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
// import axios from 'axios'
// import { getCarousel } from '@/api/home.js'
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
      // axios.get('http://49.234.102.27/:8080/blog/api/carousel/get_all').then(res => {
      //   console.log(res)
      //   var imageList = res.data.data
      //   console.log(imageList)
      // })

      // 方法三
      this.$http.get('https://api.liuyuay.cn/api/carousel/get_all',
        {params: {}}
      ).then(function (res) {
        var imageList = res.data.data
        for (var i = 0; i < imageList.length; i++) {
          this.swiperData.push(imageList[i].imageUrl)
        }
      }).catch(function () {
      })
    }
  }
}
</script>

<style scoped>
</style>
