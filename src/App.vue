<template>

  <RouterLink to="/">Go to Home</RouterLink>
  <br/>
  <RouterLink to="/about">Go to About</RouterLink>
  <br/>
  <RouterLink to="/about?id=1">Go to About</RouterLink>
  <br/>
  <RouterLink to="/about?id=2">Go to About</RouterLink>
  <br/>
  <button @click="toPath">按钮1</button>

  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
console.dir(router);
const toPath = () => {
  router.push({
    path: '/about', 
    query: {
      id: 666
    },
  })
}
</script>

<style scoped>

</style>
