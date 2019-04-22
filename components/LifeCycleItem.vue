<template lang="pug">
  styled-title LifeCycle Item {{isUpdated ? '(updated!!)' : ''}}
</template>

<script>
  import { mapMutations } from 'vuex';
  import styled from 'vue-styled-components';

  const StyledTitle = styled.h2`
    display: inline-block;
    position: relative;
    margin: 45px auto;
    width: 100%;
    color: #000;
    font-size: 46px;
    font-weight: bold;
    text-align: center;
  `;

  export default {
    name: 'LifeCycleItem',
    data() {
      return {
        timerId: null
      }
    },
    props: {},
    computed: {
      isUpdated() {
        return this.$store.state.lifecycle.isUpdated
      }
    },
    components: {
      StyledTitle
    },
    methods: {
      ...mapMutations({
        init: 'lifecycle/init',
        setUpdated: 'lifecycle/setUpdated',
        pushMessage: 'lifecycle/pushMessage'
      })
    },
    beforeCreate() {
      // this.initMessages();
      // this.pushMessage('beforeCreate');
    },
    created() {
      this.init();
      this.pushMessage('created');
    },
    beforeMount() {
      this.pushMessage('beforeMount');
    },
    mounted() {
      this.pushMessage('mounted');
      this.timerId = setTimeout(() => {
        this.setUpdated();
        this.timerId = null;
      }, 1000);
    },
    beforeUpdate() {
      this.pushMessage('beforeUpdate');
    },
    updated() {
      this.pushMessage('updated');
    },
    beforeDestroy() {
      this.pushMessage('beforeDestroy');
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    },
    destroyed() {
      this.pushMessage('destroyed');
    }
  }
</script>
