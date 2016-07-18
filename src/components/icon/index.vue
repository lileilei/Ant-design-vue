<template>
  <i class=" anticon" :class="classes"></i>
</template>
<script>
  export default {
    props: {
      type: String
    },
    computed: {
      classes () {
        return [
          this.type ? `anticon-${this.type}` : ''
        ]
      }
    }
  }
</script>
