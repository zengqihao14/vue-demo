<template lang="pug">
  styledContainer.transition-container
    life-cycle-item(v-if="isCreated")
    styled-message-area
      styled-message(v-for="msg in messages" :key="msg") {{msg}}
    styled-buttons-wrapper
      styled-button(:isCreated="isCreated" @click="create") create
      styled-button(:isRemoved="!isCreated" @click="remove") remove
    return-btn
</template>

<script>
  import { mapMutations } from 'vuex';
  import styled from 'vue-styled-components';
  import LifeCycleItem from '~/components/LifeCycleItem';
  import ReturnBtn from '~/components/ReturnBtn';

  const StyledContainer = styled.section`
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const StyledMessageArea = styled.div`
    position: relative;
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

  const StyledButtonsWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    border: 1px solid rgba(0, 0, 0, .2);
    display: inline-flex;
    flex-wrap: no-wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    max-width: 280px;
  `;

  const StyledButton = styled.button`
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 1);
    width: 120px;
    font-weight: 300;
    font-size: 18px;
    color: #FFF;
    word-spacing: 5px;
    padding: 5px 15px;
  `;

  export default {
    name: 'Lifecycle',
    transition: 'slide-left-top',
    computed: {
      isCreated() {
        return this.$store.state.lifecycle.isCreated
      },
      messages() {
        return this.$store.state.lifecycle.messages
      }
    },
    components: {
      LifeCycleItem,
      StyledContainer,
      StyledMessageArea,
      StyledMessage,
      StyledButtonsWrapper,
      StyledButton,
      ReturnBtn
    },
    methods: {
      ...mapMutations({
        create: 'lifecycle/create',
        remove: 'lifecycle/remove'
      })
    }
  }
</script>
