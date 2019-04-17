<template lang="pug">
  styled-input-item
    styled-input-label(:for="name") {{label}}
    input(
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :type="type"
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
    width: auto;

    input {
      padding: 2px 8px;
      font-size: 14px;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, .7);
    }
  `;
  const StyledInputLabel = styled.div`
    position: relative;
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 3px 0 5px;
    font-size: 18px;
    line-height: 1.56;
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
      type: {
        type: String,
        default: 'input'
      }
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
