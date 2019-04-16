<template lang="pug">
  styled-input-item
    styled-input-label(:for="name") {{label}}
    input(
      :id="name"
      :name="name"
      :placeholder="placeholder"
      v-model.lazy="inputValue"
    )
</template>

<script>
  import styled from 'vue-styled-components';

  const StyledInputItem = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    margin: 5px 0;
    padding: 5px;
    width: 100%;
  `;
  const StyledInputLabel = styled.div`
    position: relative;
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 5px 0;
    font-size: 18px;
    color: #000;
  `;

  export default {
    name: 'InputItem',
    data() {
      return {
        inputValue: null
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
      placeholder: {
        type: [String, Number],
        default: ''
      },
    },
    components: {
      StyledInputItem,
      StyledInputLabel
    },
    watch: {
      inputValue: function() {
        this.$emit('input-changing', this.inputValue);
      }
    }
  }
</script>
