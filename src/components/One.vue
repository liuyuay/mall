<template>
  <el-button
    plain
    @click="open1">
    获取一言
  </el-button>
</template>

<script>
export default {
  name: 'One',
  methods: {
    open1 () {
      this.$http.get('https://v1.hitokoto.cn',
        {params: {
        }}
      ).then(function (resp) {
        console.log(resp.data)
        this.$notify({
          title: '一言',
          dangerouslyUseHTMLString: true,
          message: resp.data.hitokoto + '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
            '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---' + resp.data.from,
          showClose: false
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
