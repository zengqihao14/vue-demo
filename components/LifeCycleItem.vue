<template lang="pug">
  styled-title LifeCycle Item {{isUpdated ? '(updated!!)' : ''}}
</template>

<script>
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
        timerId: null,
        messages: [],
        isUpdated: false
      }
    },
    props: {},
    components: {
      StyledTitle
    },
    methods: {
      emitMessages() {
        this.$emit('emit-msg', this.messages);
      },
      initMessages() {
        this.messages = [];
      },
      updateMessages(msg) {
        this.messages.push(msg);
        this.emitMessages();
      }
    },
    beforeCreate() {
      // this.initMessages();
      // this.updateMessages('beforeCreate');
    },
    created() {
      this.updateMessages('created');
    },
    beforeMount() {
      this.updateMessages('beforeMount');
    },
    mounted() {
      this.updateMessages('mounted');
      this.timerId = setTimeout(() => {
        this.isUpdated = true;
        this.timerId = null;
      }, 1000);
    },
    beforeUpdate() {
      this.updateMessages('beforeUpdate');
    },
    updated() {
      this.updateMessages('updated');
    },
    beforeDestroy() {
      this.updateMessages('beforeDestroy');
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
    },
    destroyed() {
      this.updateMessages('destroyed');
    }
  }
</script>
