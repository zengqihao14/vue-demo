<template lang="pug">
  div.classBinding-main-body.transition-container
    h1.h1-class(
      :class="myClass"
    ) Class Binding Component ({{ randomNum }}) {{ reversedMessage }}
    step-process(:steps="steps")
    step-process-bar(:steps="steps")
    return-btn
</template>

<style lang="sass" scoped>
  @import '~@/assets/style/_partial/variables'

  .classBinding-main-body
    position: relative
    display: block
    margin: 60px auto
    width: 100%
    max-width: 600px

  .h1
    &-class
      font-size: 28px
      text-align: center
      line-height: 1.7
      margin: 35px 0
    &-red
      color: $lightSeaGreen
    &-bold
      font-weight: bold
    &-underline
      border-bottom: 1px solid $turquoise
</style>

<script>
  import StepProcess from '~/components/StepProcess';
  import StepProcessBar from '~/components/StepProcessBar';
  import ReturnBtn from '~/components/ReturnBtn';

  export default {
    name: 'ClassBinding',
    transition: 'slide-top',
    data() {
      return {
        myClass: ['h1-red', 'h1-bold', 'h1-underline'],
        cnt: 0,
        steps: [0, 1, 2],
        message: 'message'
      }
    },
    components: {
      StepProcess,
      StepProcessBar,
      ReturnBtn
    },
    computed: {
      randomNum: function() {
        return Math.ceil((Math.random() + 1) * 100 - 100);
      },
      reversedMessage: function() {
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>
