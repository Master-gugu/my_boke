<template>

  <RouterLink to="/">Go to Home</RouterLink>
  <br/>
  <RouterLink to="/about">Go to About</RouterLink>
  <br/>
  <RouterLink to="/about?id=1">Go to About</RouterLink>
  <br/>
  <RouterLink to="/about?id=2">Go to About</RouterLink>
  <br/>
  <button @click="toPath('/', 111)">按钮1</button>
  <button @click="toPath('/about', 222)">按钮2</button>

  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
console.dir(router);
const toPath = (path, id) => {
  router.push({
    path: path, 
    query: {
      id: id
    },
  })
}
</script>

<style scoped>

</style>
