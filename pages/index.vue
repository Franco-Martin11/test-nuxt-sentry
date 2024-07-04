<script setup lang="ts">
const route = useRoute()
const handleError= ()=> {throw new Error("Error for sentry")};

</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <button type="button" @click="handleError">Handle error</button>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
