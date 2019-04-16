<template lang="pug">
  styled-logo
    styled-triangle(type="two")
    styled-triangle(type="one")
    styled-triangle(type="three")
    styled-triangle(type="four")
</template>
s
<script>
  import styled, { css, keyframes } from 'vue-styled-components';

  const triangleProps = { type: String };

  const keyframesSelector = (name) => {
    switch (name) {
      case 'turn':
        return keyframes`
          100% {
            transform: rotateX(0deg);
          }
        `;
      case 'godown':
        return keyframes`
          100% {
            top: 180px;
          }
        `;
      case 'goright':
        return keyframes`
          100% {
            left: 70px;
          }
        `;
      default:
        return keyframes``;
    }
  };

  const setTriangle = (type) => {
    switch (type) {
      case 'one':
        return css`
          border-left: 105px solid transparent;
          border-right: 105px solid transparent;
          border-bottom: 180px solid #41b883;
        `;
      case 'two':
        return css`
          top: 30px;
          left: 35px;
          animation: ${keyframesSelector('goright')} 0.5s linear forwards 3.5s;
          border-left: 87.5px solid transparent;
          border-right: 87.5px solid transparent;
          border-bottom: 150px solid #3b8070;
        `;
      case 'three':
        return css`
          top: 60px;
          left: 35px;
          animation: ${keyframesSelector('goright')} 0.5s linear forwards 3.5s;
          border-left: 70px solid transparent;
          border-right: 70px solid transparent;
          border-bottom: 120px solid #35495e;
        `;
      case 'four':
        return css`
          top: 120px;
          left: 70px;
          animation: ${keyframesSelector('godown')} 0.5s linear forwards 3s;
          border-left: 35px solid transparent;
          border-right: 35px solid transparent;
          border-bottom: 60px solid #fff;
        `;
      default:
        return css``;
    }
  };

  const StyledLogo = styled.div`
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 180px;
    width: 245px;
    animation: turn 2s linear forwards 1s;
    transform: rotateX(180deg);
  `;

  const StyledTriangle = styled('div', triangleProps)`
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    ${({type}) => (setTriangle(type))}
  `;

  export default {
    components: {
      StyledLogo,
      StyledTriangle
    }
  }
</script>
