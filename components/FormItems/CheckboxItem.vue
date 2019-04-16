<template lang="pug">
  styled-input-item
    styled-input-label(:for="name") {{label}}
    input(
      type="checkbox"
      :id="name"
      :name="name"
      v-model="checked"
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
  const StyledInputLabel = styled.label`
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
        checked: false
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
      StyledInputItem,
      StyledInputLabel
    },
    watch: {
      checked: function() {
        this.$emit('check-changing', this.checked);
      }
    }
  }
</script>
