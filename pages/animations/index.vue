<template lang="pug">
  styled-container.transition-container
    styled-title#animated-title(ref="animatedTitle") Animations
    styled-number animatedNumber: {{number.toFixed(2)}}
    .animated-box(ref="animatedBox" @mouseover="onBoxHover")
    styled-animated-list(ref="animatedList")
      li list element 1
      li list element 2
      li list element 3
      li list element 4
    styled-animated-loading-wrapper
      styled-animated-loading(ref="animatedLoading")
      styled-animated-loading2(ref="animatedLoading2")
    div.fixed-list-wrapper
      ui.fixed-list(ref="animatedFixList")
        li.fixed-list--red list element 1
        li.fixed-list--yellow list element 2
        li.fixed-list--blue list element 3
        li.fixed-list--black list element 4
    return-btn
</template>

<script>
  import styled from 'vue-styled-components';
  import ReturnBtn from '~/components/ReturnBtn';

  import {
    BoxAnimation,
    TextAnimation,
    ListInAnimation,
    LoadingAnimation
  } from '~/middleware/Animation';

  const StyledContainer = styled.section`
    position: relative;
    margin: 0;
    padding: 60px 0 0;
    height: 8000px;
    min-height: 100vh;
    min-width: 100vw;
  `;

  const StyledTitle = styled('h1')`
    position: relative;
    margin: 0 auto;
    padding: 15px 0;
    width: 100%;
    font-size: 32px;
    font-weight: 600;
    color: #333;
    text-align: center;
  `;

  const StyledNumber= styled('p')`
    position: relative;
    margin: 0 auto;
    padding: 15px 0;
    width: 100%;
    font-size: 18px;
    color: #333;
    text-align: center;
  `;

  const StyledAnimatedBox = styled.div`
    position: relative;
    margin: 10px auto;
    width: 60px;
    height: 60px;
    background-color: blue;
    border-radius: 8px;
     & div {
      position: absolute;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: #FFF;
      opacity: 1;
      width: 6px;
      height: 6px;
     }
  `;

  const StyledAnimatedList = styled.ul`
    position: relative;
    diplay: block;
    width: 100%;
    max-width: 640px;
    margin: 15px auto;
    & li {
      width: 100%;
      font-size: 16px;
      background-color: #DDD;
      color: #333;
      margin: 2px 0;
      padding: 8px 15px;
      &:hover {
        color: #FFF;
        background-color: #333;
      }
    }
  `;

  const StyledAnimatedLoadingWrapper = styled.div`
    position: relative;
    display: block;
    margin: 32px auto;
    padding: 0;
    width: 140px;
    height: 140px;
  `;

  const StyledAnimatedLoading = styled.div`
    position: absolute;
    display: block;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgba(0, 130, 260, 1);
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(0, 130, 260, 1);
    }
  `;

  const StyledAnimatedLoading2 = styled.div`
    position: absolute;
    display: block;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-75deg);
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid rgba(0, 130, 260, 1);
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #FFF;
      border: 1px solid rgba(0, 130, 260, 1);
    }
  `;

  export default {
    name: 'Animations',
    transition: 'slide-top',
    data() {
      return {
        number: 0,
        boxActived: false,
        boxAnimating: false
      }
    },
    components: {
      StyledContainer,
      StyledTitle,
      StyledNumber,
      StyledAnimatedBox,
      StyledAnimatedList,
      StyledAnimatedLoadingWrapper,
      StyledAnimatedLoading,
      StyledAnimatedLoading2,
      ReturnBtn
    },
    methods: {
      onBoxHover(e) {
        if (!this.boxAnimating) {
          this.boxAnimating = true;
          BoxAnimation(
            e.target,
            this.boxAnimating,
            this.boxActived,
            () => {
              this.boxAnimating = true;
            },
            () => {
              this.boxAnimating = false;
              this.boxActived = !this.boxActived;
            }
          );
        }
      }
    },
    mounted() {
      const { animatedList, animatedLoading, animatedLoading2, animatedFixList } = this.$refs;

      TextAnimation(this.$data, { number: 200 }, .5);
      ListInAnimation(animatedList.$el.querySelectorAll('li'));
      LoadingAnimation(animatedLoading.$el, animatedLoading2.$el);
      window.onscroll = (e) => {
        console.log('animatedFixList')
        animatedFixList.style.transform = `translateY(-${Math.min(880 * window.scrollY / document.body.scrollHeight, 660)}px)`;
        console.log('onScroll', window.scrollY)
      };
    }
  }
</script>

<style lang="sass">
  .animated-box
    position: relative
    margin: 10px auto
    width: 60px
    height: 60px
    background-color: blue
    border-radius: 8px
  .fixed-list
    position: absolute
    display: block
    top: 0
    left: 0
    margin: 0
    padding: 0
    width: 100%
    &-wrapper
      position: sticky
      display: block
      margin: 0
      padding: 0
      top: 60px
      right: 60px
      width: 320px
      height: 220px
      overflow: hidden
    &--red
      background-color: red
    &--yellow
      background-color: yellow
    &--blue
      background-color: blue
    &--black
      background-color: #333
    & li
      position: relative
      display: block
      width: 100%
      height: 220px
      margin: 0
      padding: 15px
      color: #FFF
</style>
