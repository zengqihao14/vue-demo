<template lang="pug">
  .loading-page(v-if="loading")
    p.loading
</template>

<script>

  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 0);
      })
    }
  }
</script>

<style lang="sass">
  .loading
    position: absolute
    display: block
    top: 50%
    left: 50%
    height: 40px
    width: 40px
    border-radius: 50%
    border: 1px solid rgba(0, 0, 0, .3)
    border-top: 1px solid rgba(0, 0, 0, .65)
    animation: rotate 1s infinite linear
    z-index: 1
  @-moz-keyframes rotate
    from
      -moz-transform: translate(-50%, -50%) rotate(0deg)
    to
      -moz-transform: translate(-50%, -50%) rotate(360deg)
  @-webkit-keyframes rotate
    from
      -webkit-transform: translate(-50%, -50%) rotate(0deg)
    to
      -webkit-transform: translate(-50%, -50%) rotate(360deg)
  @keyframes rotate
    from
      transform: translate(-50%, -50%) rotate(0deg)
    to
      transform: translate(-50%, -50%) rotate(360deg)
</style>
