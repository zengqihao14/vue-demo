<template lang="pug">
  styled-input-wrapper
    styled-label {{label}}
    select(
      :id="name"
      :name="name"
      v-model="selected"
    )
      option(
        v-for="option in selectOptions"
        :hidden="option.hidden"
        :selected="option.isDefault"
        :disabled="option.disabled"
        :value="option.value"
      ) {{option.label}}
</template>

<script>
  import styled from 'vue-styled-components';

  const StyledInputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    margin: 15px 0;
  `;
  const StyledLabel = styled.p`
    position: relative;
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 0 0 0 5px;
    font-size: 18px;
    color: #000;
  `;

  export default {
    name: 'SelectItem',
    data() {
      return {
        selected: '',
        selectOptions: [
          {label: '请选择', value:'', isDefault: false, disabled: true, hidden: true},
          {label: 'A', value:'A', isDefault: false, disabled: false, hidden: false},
          {label: 'B', value:'B', isDefault: false, disabled: false, hidden: false},
          {label: 'Z', value:'Z', isDefault: false, disabled: false, hidden: false}
        ]
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
      StyledLabel
    },
    watch: {
      selected: function() {
        return this.$emit('selected-changing', this.selected);
      }
    }
  }
</script>
