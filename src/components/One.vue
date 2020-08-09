<template>
  <div>
    <mavon-editor style="height: 600px"></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'Markdown',
  components: {
    mavonEditor
  }
}
</script>
