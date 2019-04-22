<template lang="pug">
  styled-container.transition-container
    form(@submit.prevent="hasLogin ? doLogout() : login()")
      styled-form-contents(v-if="isBusy")
        loading
      styled-form-contents(v-else-if="!hasLogin")
        input-item(
          :label="'username'"
          :placeholder="'username...'"
          :name="'username'"
          @input-changing="val => username = val"
        )
        input-item(
          :label="'password'"
          :placeholder="'password...'"
          :type="'password'"
          :name="'password'"
          @input-changing="val => password = val"
        )
        styled-submit-btn(
          type="submit"
          :disabled="isBusy"
        ) Login
      styled-form-contents(v-else)
        styled-submit-btn(
          type="submit"
          :disabled="isBusy"
        ) Logout
    styled-message-area
      styled-message username: {{ username }}
      styled-message password: {{ password }}
      styled-message hasLogin: {{ hasLogin }}
      styled-message isBusy: {{ isBusy }}
      styled-message loginUser: {{ loginUser }}
    return-btn
</template>

<script>
  import { mapActions } from 'vuex';
  import styled from 'vue-styled-components';
  import InputItem from '~/components/FormItems/InputItem';
  import ReturnBtn from '~/components/ReturnBtn';
  import Loading from '~/components/Loading';

  const StyledContainer = styled.section`
    position: relative;
    margin: 0;
    padding: 60px 0 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgba(0, 0, 0, .027);

    form {
      position: relative;
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
    }
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
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 3px 4px 9px -2px rgba(0, 0, 0, .1);
  `;

  const StyledSubmitBtn = styled.button`
    position: relative;
    margin: 30px auto;
    background-color: #000;
    border-radius: 5px;
    border: 1px solid #000;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    width: 180px;
    padding: 8px 12px;
    opacity: 1;

    &:hover {
      cursor: pointer;
      opacity: .8;
      transition: opacity .5s ease;
    }
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
    name: 'Api',
    transition: 'slide-top',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      loginUser() {
        return this.$store.state.auth.loginUser
      },
      isBusy() {
        return this.$store.state.auth.isBusy
      },
      hasLogin() {
        return this.$store.state.auth.hasLogin
      }
    },
    components: {
      StyledContainer,
      StyledFormContents,
      StyledSubmitBtn,
      StyledMessageArea,
      StyledMessage,
      InputItem,
      Loading,
      ReturnBtn
    },
    methods: {
      ...mapActions({
        doLogin: 'auth/doLogin',
        doLogout: 'auth/doLogout',
        getUser: 'auth/getUserFromCookie'
      }),
      login() {
        this.doLogin({username: this.username, password: this.password});
      }
    },
    mounted() {
      this.getUser();
    }
  }
</script>
