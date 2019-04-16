<template lang="pug">
  styled-return-link(to="/") Go back
</template>

<script>
  import Vue from 'vue';
  import styled from 'vue-styled-components';

  const NLink = Vue.component('NLink');
  const StyledReturnLink = styled(NLink)`
    display: block;
    border-radius: 4px;
    border: 1px solid #000;
    background-color: #000;
    color: #FFF;
    padding: 6px 30px;
    margin: 60px auto 0;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    width: 320px;

    &:hover {
      transition: opacity .48s ease;
      opacity: .85;
    }
  `;

  export default {
    name: 'ReturnBtn',
    components: {
      StyledReturnLink
    }
  }
</script>
