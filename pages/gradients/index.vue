<template lang="pug">
  styledContainer.transition-container
    gradient-item
    go-back-wrapper
      return-btn
</template>

<script>
  import styled from 'vue-styled-components';
  import ReturnBtn from '~/components/ReturnBtn';

  const StyledContainer = styled.section`
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100vw;
    display: flex;
  `;

  const GradientItem = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background-color: #DDD;
  `;

  const GoBackWrapper = styled.div`
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 30px;
    padding: 0;
    margin: 0;
  `;

  export default {
    name: 'Gradients',
    transition: 'slide-top',
    components: {
      StyledContainer,
      GradientItem,
      GoBackWrapper,
      ReturnBtn
    }
  }
</script>
