<template lang="pug">
  styled-steps-container(:nums="nums")
    styled-steps-wrapper(v-for="(item, index) in steps" :key="index")
      styled-steps-item(
        :data-idx="index"
        :isCurrent="index === currentStepIdx"
        :isPassed="index < currentStepIdx"
        @click="() => handleChange(index)"
      ) {{index + 1}}
      styled-steps-line(
        v-if="index !== nums - 1"
        :isPassed="index < currentStepIdx"
      )
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
  const stepLineProps = {
    isPassed: Boolean
  };
  const setItemStyle = (props) => {
    if (props) {
      if (props.isCurrent) {
        return css`
          border: 2px solid #333;
          color: #FFF;
          background-color: #333;
          font-size: 16px;
          width: 38px;
          height: 38px;
        `
      } else if (props.isPassed) {
        return css`
          border: 2px solid #777;
          color: #FFF;
          background-color: #777;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const StyledStepsItem = styled('button', stepItemProps)`
    position: relative;
    margin: 0;
    padding: 0;
    display: block;
    width: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #333;
    color: #333;
    background-color: #FFF;
    transition: opacity .6s ease, font .48s ease, color .48s ease, border .48s ease, background-color .48s ease, width .58s ease, height .58s ease;
    &:hover {
      cursor: pointer;
      color: #FFF;
      background-color: #333;
      border: 2px solid #333;
    }
    ${(props) => (setItemStyle(props))}
  `;

  const StyledStepsLine = styled('div', stepLineProps)`
    position: relative;
    display: block;
    width: 100px;
    margin: 0 5px;
    height: 2px;
    background-color: rgba(0, 0, 0, .15);
    transition: border-color .48s ease, background-size .85s cubic-bezier(0.6, 0.01, 0.39, 0.97);
    background-image: linear-gradient(#333, #333);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: left;
    ${({isPassed}) => isPassed && css`
      background-size: 100% 100%;
    `}
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
      StyledStepsItem,
      StyledStepsLine
    },
    methods: {
      handleChange(index) {
        this.currentStepIdx = parseInt(index);
      }
    }
  }
</script>
