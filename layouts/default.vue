<template lang="pug">
  div.main-container(:class="isLoaded ? 'isLoaded' : ''")
    nuxt
</template>

<script>
  import styled from 'vue-styled-components';

  export default {
    name: 'DefaultLayout',
    data() {
      return {
        isLoaded: false
      }
    },
    mounted() {
      this.isLoaded = true;
    }
  }
</script>

<style lang="sass">
  @import '~@/assets/style/main'
  .main-container
    opacity: 0
    transition: opacity .36s ease
    &.isLoaded
      opacity: 1

</style>
