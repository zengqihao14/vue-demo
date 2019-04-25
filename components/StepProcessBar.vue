<template lang="pug">
  styled-steps-container(:nums="nums")
    styled-steps-wrapper(
      v-for="(item, index) in steps"
      :key="index"
      @click="() => handleChange(index)"
    )
      styled-steps-item-upper(
        :data-idx="index"
        :isCurrent="index === currentStepIdx"
        :isPassed="index < currentStepIdx"
      )
      styled-steps-item-lower(
        :data-idx="index"
        :isCurrent="index === currentStepIdx"
        :isPassed="index < currentStepIdx"
      )
      styled-steps-text {{index + 1}}
</template>

<script>
  import styled, { css } from 'vue-styled-components';

  const stepsProps = {
    nums: Number
  };
  const stepItemProps = {
    isCurrent: Boolean,
    isPassed: Boolean
  };

  const setItemStyle = (props) => {
    if (props) {
      if (props.isCurrent) {
        return css`
          color: #FFF;
          background-size: 100% 100%;
        `
      } else if (props.isPassed) {
        return css`
          color: #FFF;
          background-size: 100% 100%;
        `
      }
    }
  };

  const StyledStepsContainer = styled('div', stepsProps)`
    position: relative;
    padding: 10px;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const StyledStepsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    &:hover {
      cursor: pointer;
    }
  `;

  const StyledStepsItemUpper = styled('button', stepItemProps)`
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    height: 16px;
    border: 2px solid #FFF;
    border-bottom: none;
    background-color: rgba(0, 0, 0, .05);
    background-image: linear-gradient(#333, #333);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: left;
    transform: skew(25deg, 0);
    transition: color .85s ease, background-size .85s cubic-bezier(0.6, 0.01, 0.39, 0.97);
    ${(props) => (setItemStyle(props))}
  `;
  const StyledStepsItemLower = styled('button', stepItemProps)`
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    height: 16px;
    border: 2px solid #FFF;
    border-top: none;
    background-color: rgba(0, 0, 0, .05);
    background-image: linear-gradient(#333, #333);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: left;
    transform: skew(-25deg, 0);
    transition: color .85s ease, background-size .85s cubic-bezier(0.6, 0.01, 0.39, 0.97);
    &:hover {
      cursor: pointer;
    }
    ${(props) => (setItemStyle(props))}
  `;

  const StyledStepsText = styled('p', stepItemProps)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${({isCurrent, isPassed}) => isCurrent || isPassed ? '#FFF' : '#DDD'};
  `;

  export default {
    data() {
      return {
        currentStepIdx: 0
      }
    },
    props: {
      steps: {
        type: Array,
        default: []
      }
    },
    computed: {
      nums: function() {
        return this.steps.length;
      }
    },
    components: {
      StyledStepsContainer,
      StyledStepsWrapper,
      StyledStepsItemUpper,
      StyledStepsItemLower,
      StyledStepsText
    },
    methods: {
      handleChange(index) {
        this.currentStepIdx = parseInt(index);
      }
    }
  }
</script>
