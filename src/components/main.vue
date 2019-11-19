<template>
  <main id="hitokoto">
    <blockquote>
      {{ hi }}
      <br/>
      <footer>——
        <cite>{{ author }}</cite>
      </footer>
    </blockquote>
  </main>
</template>

<script>
export default {
  data () {
    return {
      hi: '加载中...',
      author: 'Liuyu'
    }
  },
  mounted: function () {
    // 页面一加载时就执行
    this.$http.get('https://v1.hitokoto.cn',
      {params: {}}
    ).then(function (res) {
      this.hi = res.body.hitokoto
      this.author = res.body.from
    }).catch(function () {
      this.hi = '加载中...'
      this.author = 'Liuyu'
    })
  }
}
</script>

<style scoped>
  main{
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    width: 800px;
    height: 500px;
    line-height: 2;
    margin: auto;
    border-radius: 5px;
    background: rgba(255, 255, 255, .3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
  }
</style>
