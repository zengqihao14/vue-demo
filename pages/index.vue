<template lang="pug">
  styledContainer.transition-container
    div
      logo
      styled-title {{title}}
      styled-subTitle {{subTitle}}
      styled-router-links
        styled-nuxt-link(to="lifecycle") LifeCycle
        styled-nuxt-link(to="classbinding") ClassBinding
        styled-nuxt-link(to="form") Form
        styled-nuxt-link(to="api") API
      loading
      styled-links-wrapper
      transition(
        name="slide-left-quick"
        mode="out-in"
      )
        styled-link(
          v-if="!gitBtnShow"
          key="doc-btn"
          @click.prevent="onDocBtnClick"
          color="green"
          :href="documentBtn.url"
          :target="documentBtn.target"
        ) {{documentBtn.label}}
        styled-link(
          v-else
          @click.prevent="onGitBtnClick"
          key="git-btn"
          color="grey"
          :href="githubBtn.url"
          :target="githubBtn.target"
        ) {{githubBtn.label}}
</template>

<script>
  import Vue from 'vue';
  import Logo from '~/components/Logo';
  import Loading from '~/components/Loading';
  import styled from 'vue-styled-components';

  import { MAIN_PAGE } from '~/constants';

  const NLink = Vue.component('NLink');
  const btnProps = { color: String };

  const StyledContainer = styled.section`
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const StyledTitle = styled.h1`
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  `;

  const StyledSubTitle = styled.h2`
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  `;

  const StyledLinksWrapper = styled.div`
    padding-top: 15px;
  `;

  const StyledRouterLinks = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `;

  const StyledNuxtLink = styled(NLink)`
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #000;
    color: #000;
    padding: 6px 30px;
    margin: 5px auto;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    width: 320px;
    transition: opacity .48s ease, border-color .48s ease, background-size 1s cubic-bezier(0.6, 0.01, 0.39, 0.97);
    background-image: linear-gradient(rgba(0, 50, 50, .2), rgba(0, 50, 50, .2));
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: left;

    &:hover {
      background-size: 100% 100%;
    }
  `;

  const StyledLink = styled('a', btnProps)`
    display: inline-block;
    border-radius: 4px;
    border: 1px solid ${({color}) => color ? colorStyle(color) : '#3B8070'};
    color: ${({color}) => color ? colorStyle(color) : '#3B8070'};
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    transition: opacity .2s ease-in, transform .2s ease-out;

    &:hover {
      color: #fff;
      background-color: ${({color}) => color ? colorStyle(color) : '#3B8070'};
    }
    &:first-child {
      margin-left: 0;
    };
  `;

  const colorStyle = (color) => {
    switch (color) {
      case 'green':
        return '#3B8070';
      case 'grey':
        return '#35495E';
      default:
        return '#35495E';
    }
  };

  export default {
    name: 'Main',
    transition: 'slide-right',
    data() {
      return {
        title: MAIN_PAGE.TITLE,
        subTitle: MAIN_PAGE.SUB_TITLE,
        documentBtn: {
          label: MAIN_PAGE.BUTTONS.DOCUMENT_BUTTON.LABEL,
          url: MAIN_PAGE.BUTTONS.DOCUMENT_BUTTON.URL,
          target: MAIN_PAGE.BUTTONS.DOCUMENT_BUTTON.TARGET
        },
        githubBtn: {
          label: MAIN_PAGE.BUTTONS.GITHUB_BUTTON.LABEL,
          url: MAIN_PAGE.BUTTONS.GITHUB_BUTTON.URL,
          target: MAIN_PAGE.BUTTONS.GITHUB_BUTTON.TARGET
        },
        gitBtnShow: false
      }
    },
    components: {
      Logo,
      Loading,
      StyledContainer,
      StyledTitle,
      StyledSubTitle,
      StyledRouterLinks,
      StyledNuxtLink,
      StyledLinksWrapper,
      StyledLink
    },
    methods: {
      onDocBtnClick() {
        this.gitBtnShow = true;
      },
      onGitBtnClick() {
        this.gitBtnShow = false;
      }
    }
  }
</script>
