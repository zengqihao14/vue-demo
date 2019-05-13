<template lang="pug">
  styled-container.transition-container
    styled-title#animated-title(ref="animatedTitle") Animations
    styled-number animatedNumber: {{number.toFixed(2)}}
    styled-animated-box(ref="animatedBox" @click="onBoxClick")
    return-btn
</template>

<script>
  import styled from 'vue-styled-components';
  import ReturnBtn from '~/components/ReturnBtn';

  import { BoxClickAnimation, TextAnimation } from '~/middleware/Animation';

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
      ReturnBtn
    },
    methods: {
      onBoxClick(e) {
        if (!this.boxAnimating) {
          this.boxAnimating = true;
          BoxClickAnimation(
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
      const { animatedBox } = this.$refs;
      console.log('animatedBox', animatedBox);
      TextAnimation(this.$data, { number: 200 }, .5);
      window.onscroll = (e) => {
        console.log('onScroll', window.scrollY)
      };
    }
  }
</script>
