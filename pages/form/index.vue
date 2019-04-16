<template lang="pug">
  styled-container.transition-container
    styled-form
      styled-form-contents
        input-item(
          :label="'InputItem'"
          :placeholder="'...'"
          :name="'inputItem'"
          @input-changing="val => inputValue = val"
        )
        checkbox-item(
          :label="'CheckBoxItem'"
          :name="'checkboxItem'"
          @check-changing="val => checkboxValue = val"
        )
        radio-item(
          :label="'RadioItem'"
          :name="'radioItem'"
          @picked-changing="val => radioValue = val"
        )
        select-item(
          :label="'SelectItem'"
          :name="'selectItem'"
          @selected-changing="val => selectValue = val"
        )
    styled-message-area
      styled-message InputValue: {{ inputValue }}
      styled-message CheckBoxValue: {{ checkboxValue }}
      styled-message RadioValue: {{ radioValue }}
      styled-message SelectValue: {{ selectValue }}
    return-btn
</template>

<script>
  import styled from 'vue-styled-components';
  import InputItem from '~/components/FormItems/InputItem';
  import CheckboxItem from '~/components/FormItems/CheckboxItem';
  import RadioItem from '~/components/FormItems/RadioItem';
  import SelectItem from '~/components/FormItems/SelectItem';
  import ReturnBtn from '~/components/ReturnBtn';

  const StyledContainer = styled.section`
    position: relative;
    margin: 0;
    padding: 60px 0 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, .027);
  `;
  const StyledForm = styled.form`
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  `;

  const StyledFormContents = styled.div`
    margin: 0 auto 35px;
    width: 100%;
    min-height: 400px;
    padding: 35px;
    display: flex;
    background-color: #FFF;
    border-radius: 8px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: center;
    box-shadow: 3px 4px 9px -2px rgba(0, 0, 0, .1);
  `;

  const StyledMessageArea = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    height: auto;
    min-height: 80px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, .2);
  `;


  const StyledMessage = styled.p`
    height: auto;
    padding: 3px 5px;
    font-size: 12px;
    line-height: 1.45;
    color: #333;
  `;

  export default {
    name: 'Form',
    transition: 'slide-left',
    data() {
      return {
        inputValue: '',
        checkboxValue: false,
        radioValue: '',
        selectValue: '',
      }
    },
    components: {
      StyledContainer,
      StyledForm,
      StyledFormContents,
      StyledMessageArea,
      StyledMessage,
      InputItem,
      CheckboxItem,
      RadioItem,
      SelectItem,
      ReturnBtn
    },
    methods: {}
  }
</script>
