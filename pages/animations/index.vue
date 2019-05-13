<template lang="pug">
  styled-container.transition-container
    styled-title#animated-title(ref="animatedTitle") Animations
    p animatedNumber: {{number.toFixed(2)}}
    styled-animated-box(ref="animatedBox" @click="onBoxClick")
      div
    return-btn
</template>

<script>
  import { TweenLite } from 'gsap';
  import styled from 'vue-styled-components';
  import ReturnBtn from '~/components/ReturnBtn';

  const StyledContainer = styled.section`
    position: relative;
    margin: 0;
    padding: 60px 0 0;
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
      StyledAnimatedBox,
      ReturnBtn
    },
    methods: {
      onBoxClick(e) {
        if (!this.boxAnimating) {
          TweenLite.to(e.target, 1, {
            ease: 'Strong.easeInOut',
            x: this.boxActived ? 0 : 200,
            rotation: this.boxActived ? 0 : 360,
            backgroundColor: this.boxActived ? 'red' : 'blue',
            onStart: () => {
              this.boxAnimating = true;
            },
            onComplete: () => {
              this.boxAnimating = false;
              this.boxActived = !this.boxActived;
            }
          });
          TweenLite.to(e.target, .25, {
            y: -30
          });
          TweenLite.to(e.target, .5, {
            delay: .25,
            y: 30
          });
          TweenLite.to(e.target, 1, {
            delay: .5,
            y: 0
          });
          TweenLite.to(e.target, .5, {
            backgroundColor: 'green',
            borderRadius: '50%',
            opacity: 0.75
          });
          TweenLite.to(e.target, 1, {
            delay: 0.5,
            backgroundColor: this.boxActived ? 'blue' : 'red',
            borderRadius: '8px',
            opacity: 1,
            y: 0
          });

          TweenLite.to(e.target.querySelector('div'), 0, {
            display: 'block',
            opacity: .4,
            scale: 1
          });
          TweenLite.to(e.target.querySelector('div'), .4, {
            delay: .1,
            opacity: 0,
            display: 'none',
            scale: 14
          });
        }
      }
    },
    mounted() {
      const { animatedBox } = this.$refs;
      console.log('animatedBox', animatedBox);
      TweenLite.to(this.$data, .5, { number: 200 });
    }
  }
</script>
