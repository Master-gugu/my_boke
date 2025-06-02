<template>
    <div>
        页面二111
    </div>
    <div>
        接收参数：{{ name }}
    </div>
    <button @click="toPage">跳转页面一</button>
</template>

<script setup lang="ts">
import { watch, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

let name: Ref<string> = ref<string>('');
watch(() => route.query.name as string | undefined, (newName: string | undefined, oldName: string | undefined) => {
    console.log('name变化了', newName, oldName);
    if (newName === undefined) return;
    name.value = newName;
}, { immediate: true })

watch(() => route.query.id, (newId, oldId) => {
    console.log('id变化了', newId, oldId)
})

interface UserInfo {
    id: number,
    name: string
}

let userInfo: Ref<UserInfo> = ref<UserInfo>({
    id: 123,
    name: '李四'
})

const toPage = () => {
    router.push({
        path: '/',
        query: {
            userInfo: JSON.stringify(userInfo.value)
        }
    })
}



console.log('查看信息--页面二', route)
</script>

<style>

</style>