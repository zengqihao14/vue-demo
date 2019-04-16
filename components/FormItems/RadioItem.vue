<template lang="pug">
  styled-input-wrapper
    styled-label {{label}}
    styled-input-item
      input(
        type="radio"
        :id="`${name}-0`"
        :name="name"
        value="Zero"
        v-model="picked"
      )
      styled-input-label(:for="`${name}-0`") Zero
    styled-input-item
      input(
        type="radio"
        :id="`${name}-1`"
        :name="name"
        value="One"
        v-model="picked"
      )
      styled-input-label(:for="`${name}-1`") One
    styled-input-item
      input(
        type="radio"
        :id="`${name}-2`"
        :name="name"
        value="Two"
        v-model="picked"
      )
      styled-input-label(:for="`${name}-2`") Two
</template>

<script>
  import styled from 'vue-styled-components';

  const StyledInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 15px 0;
  `;
  const StyledLabel = styled.p`
    position: relative;
    display: inline-block;
    margin: 0 0 10px;
    padding: 0 0 0 5px;
    font-size: 18px;
    color: #000;
  `;
  const StyledInputItem = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    margin: 0;
    padding: 5px;
    width: 100%;
  `;
  const StyledInputLabel = styled.label`
    position: relative;
    display: inline-block;
    margin: 0 0 0 10px;
    padding: 0;
    font-size: 12px;
    color: #000;
  `;

  export default {
    name: 'RaidoItem',
    data() {
      return {
        picked: ''
      }
    },
    props: {
      label: {
        type: [String, Number],
        default: ''
      },
      name: {
        type: [String, Number],
        default: ''
      },
    },
    components: {
      StyledInputWrapper,
      StyledLabel,
      StyledInputItem,
      StyledInputLabel,
    },
    watch: {
      picked: function() {
        return this.$emit('picked-changing', this.picked);
      }
    }
  }
</script>
