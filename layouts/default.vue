<template lang="pug">
  div.main-container
    nuxt
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.transition-container {
  opacity: 1;
  transform: translate(0, 0);
  transition: opacity .35s ease-in, transform .35s ease-out;
}
.page-enter-active, .page-leave-active {
  transition: opacity .35s
}
.page-enter, .page-leave-active {
  opacity: 0
}

.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { transform: scale(0) }
  50% { transform: scale(1.5) }
  100% { transform: scale(1) }
}
@keyframes bounce-out {
  0% { transform: scale(1) }
  50% { transform: scale(1.5) }
  100% { transform: scale(0) }
}

.slide-left-enter-active {
  opacity: 0;
  transform: translate(50%, 0);
  transition: opacity -.5s ease-in, transform -.5s ease-out;
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate(-50%, 0);
  transition: opacity .5s ease-out, transform .5s ease-in;
}
.slide-left-quick-enter-active {
  opacity: 0;
  transform: translate(25%, 0);
  transition: opacity -1s ease-in, transform -1s ease-out;
}
.slide-left-quick-leave-active {
  opacity: 0;
  transform: translate(-25%, 0);
  transition: opacity .2s ease-out, transform .2s ease-in;
}
.slide-right-enter-active {
  opacity: 0;
  transform: translate(-50%, 0);
  transition: opacity -.5s ease-in, transform -.5s ease-out;
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(50%, 0);
  transition: opacity .5s ease-out, transform .5s ease-in;
}
.slide-left-top-enter-active {
  opacity: 0;
  transform: translate(-25%, -25%);
  transition: opacity -.5s ease-in, transform -.5s ease-out;
}
.slide-left-top-leave-active {
  opacity: 0;
  transform: translate(-25%, -25%);
  transition: opacity .5s ease-out, transform .5s ease-in;
}
</style>
