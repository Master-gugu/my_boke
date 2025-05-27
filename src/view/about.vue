<template>
    页面二111
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute();

watch(() => route.query.id, (newId, oldId) => {
    console.log('id变化了', newId, oldId)
})

console.log('查看信息', route)
</script>

<style>

</style>