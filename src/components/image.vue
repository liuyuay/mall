<template>
<!--  <div class="demo-image__preview">-->
<!--    <el-image-->
<!--      style="width: 100px; height: 100px"-->
<!--      :src="url"-->
<!--      :preview-src-list="srcList">-->
<!--    </el-image>-->
<!--  </div>-->
  <div
    class="markdown-body"
    v-html="content" align="left"/>
</template>
<script>
import 'mavon-editor/dist/css/index.css'
export default {
  // data () {
  //   return {
  //     url: '../static/img/avatar.jpeg',
  //     srcList: [
  //       '../static/image/a.jpg',
  //       '../static/image/b.jpg'
  //     ]
  //   }
  // }
  data () {
    return {
      content: '<blockquote>\n' +
        '<p>欢迎使用Markdown编辑器<br />\n' +
        'liuyuay.cn</p>\n' +
        '</blockquote>\n' +
        '<ul>\n' +
        '<li>KKJFKLDJL</li>\n' +
        '</ul>'
    }
  }
}
</script>

<style scoped>

</style>
