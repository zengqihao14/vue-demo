<template lang="pug">
  styled-loading-dots
    styled-dots-one
    styled-dots-two
    styled-dots-three
</template>

<script>
  import styled, { css, keyframes } from 'vue-styled-components';

  const rippleSize = 1;
  const ripple = keyframes`
    0% {
      opacity: 0;
      transform: scale(0)
    }
    33% {
      opacity: 1;
      transform: scale(1)
    }
    50% {
      opacity: 1;
      transform: scale(1)
    }
    100% {
      opacity: 0;
      transform: scale(0)
    }
  `;
  const ball = css`
    opacity: 0;
    font-size: 10px;
    border-radius: 50%;
    background-color: #3B8070;
    width: ${rippleSize}em;
    height: ${rippleSize}em;
    animation-fill-mode: both;
    animation: ${ripple} 1.8s infinite ease-in-out;
  `;

  const StyledLoadingDots = styled.div`
    display: inline-flex;
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  `;

  const StyledDotsOne = styled.div`
    ${ball}
    position: relative;
    animation-delay: 0;
  `;

  const StyledDotsTwo = styled.div`
    ${ball}
    position: relative;
    margin: 0 .8em;
    animation-delay: .3s;
  `;

  const StyledDotsThree = styled.div`
    ${ball}
    position: relative;
    animation-delay: .6s;
  `;

  export default {
    data() {
      return {
        size: 64
      }
    },
    components: {
      StyledLoadingDots,
      StyledDotsOne,
      StyledDotsTwo,
      StyledDotsThree
    }
  }
</script>
