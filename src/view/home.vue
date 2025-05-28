<template>
    页面一: {{ search }}
    <br />
    页面一: {{ firstName }} -- {{ lastName }}
    <input type="text" v-model="search" placeholder="请输入">
    <input type="text" v-model="fullName" placeholder="请输入名称">
    <button @click="toPath">
        页面一按钮
    </button>

    <!-- 渲染子组件 -->
    <ComHello></ComHello>
</template>

<script setup lang="ts">
import ComHello from '@/components/hello.vue'
import { ref, computed, type WritableComputedRef, type ComputedRef, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 导入组件

const route = useRoute();
const router = useRouter();

console.log('查看信息', route)

const search = computed({
    get() {
        console.log('触发get方法',  route.query.search)
        return route.query.search ?? '';
    },
    set(search: string) {
        console.log('触发set方法', search)
        router.replace({query: {search: search}});
    }
})

const toPath = () => {
    search.value = 'hahahahaha'
}

// 定义接口
interface UserName {
    value: string
}
const firstName: Ref<string> = ref<string>('');
const lastName: Ref<string> = ref<string>('');

const fullName: WritableComputedRef<UserName> = computed<UserName>({
    get(): UserName {
        // return firstName.value + ' ' + lastName.value;
        return {
            value: `${firstName.value} ${lastName.value}`.trim()
        };
    },
    set(value: UserName): void {
        // [firstName.value, lastName.value] = value.trim().split(' ');
        [firstName.value, lastName.value] = value.value.trim().split(' ');
    }
})

setTimeout(() => {
    // fullName.value = '测 试'
    fullName.value = {value: '测 试'}
}, 1000)

</script>

<style>

</style>