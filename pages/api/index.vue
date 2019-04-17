<template lang="pug">
  styled-container.transition-container
    form(
      v-if="!isBusy"
      @submit.prevent="login"
    )
      styled-form-contents(v-if="!isLogin")
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
          @click="logout"
        ) Logout
    styled-loading-content(v-else)
      loading
    styled-message-area
      styled-message username: {{ username }}
      styled-message password: {{ password }}
    return-btn
</template>

<script>
  import styled from 'vue-styled-components';
  import InputItem from '~/components/FormItems/InputItem';
  import ReturnBtn from '~/components/ReturnBtn';
  import Loading from '~/components/Loading';

  import { callAPI } from '~/middleware/API/api';

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
      opacity: .8;
      transition: opacity .5s ease;
    }
  `;

  const StyledLoadingContent = styled.div`
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: 0 auto 35px;
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
        password: '',
        isBusy: false,
        isLogin: false
      }
    },
    components: {
      StyledContainer,
      StyledFormContents,
      StyledSubmitBtn,
      StyledLoadingContent,
      StyledMessageArea,
      StyledMessage,
      InputItem,
      Loading,
      ReturnBtn
    },
    methods: {
      async login() {
        const endpoint = {
          path: 'http://localhost:3100/api/login',
          method: 'post',
          authorization: false
        };
        const options = {
          data: {
            username: this.username,
            password: this.password
          },
          withCredentials: true
        };
        try {
          this.isBusy = true;
          await callAPI(endpoint, options);
          this.isLogin = true;
          this.isBusy = false;
        } catch (err) {
          this.isBusy = false;
          return Promise.reject(err);
        }
      },
      async logout() {
        const endpoint = {
          path: 'http://localhost:3100/api/logout',
          method: 'post',
          authorization: false
        };
        const options = {
          data: {
            withCredentials: true
          }
        };
        try {
          this.isBusy = true;
          await callAPI(endpoint, options);
          this.isLogin = false;
          this.isBusy = false;
        } catch (err) {
          this.isBusy = false;
          return Promise.reject(err);
        }
      }
    }
  }
</script>
