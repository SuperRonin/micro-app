<template>
  <div class="pdf-wrapper">
    <Pdf :src="src"></Pdf>
  </div>
</template>

<script>
import Pdf from 'vue-pdf'

export default {
  components: {
    Pdf,
  },
  props: {
    src: {
      type: String,
      default: '',
    },
  },
}
</script>