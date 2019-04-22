<template lang="pug">
  div
    h1(v-if="error.statusCode === 404") 页面不存在
    h1(v-else) 应用发生错误异常
</template>

<script>
  export default {
    props: ['error']
  }
</script>
