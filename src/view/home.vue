<template>
    <div class="box1">
        页面一: {{ search }}
    </div>
    <div class="box2">
        页面一: {{ firstName }} -- {{ lastName }}
        <input type="text" v-model="search" placeholder="请输入">
        <input type="text" v-model="fullName" placeholder="请输入名称">
        <button @click="toPath">
            页面一按钮
        </button>
    </div>
    <div>
        接收参数：{{ objInfo.id }} -- {{ objInfo.name }}
    </div>
    <button @click="toPage('张三')">跳转页面二</button>
    
    <!-- 渲染子组件 -->
    <ComHello></ComHello>
</template>

<script setup lang="ts">
import ComHello from '@/components/hello.vue'
import { watch, ref, computed, type WritableComputedRef, type ComputedRef, type Ref } from 'vue'
// 此问题可能由 TypeScript 配置问题或 vue-router 未安装导致。
// 若未安装 vue-router，需先执行 'npm install vue-router' 或 'yarn add vue-router' 进行安装。
// 若已安装，可尝试在 tsconfig.json 里设置 "moduleResolution": "node"。
import { useRoute, useRouter } from 'vue-router'
// 导入组件

const route = useRoute();
const router = useRouter();

const toPage = (name: string) => {
    router.push({
        path: '/about',
        query: {
            name: name
        }
    })
}

interface UserInfo {
    id: number,
    name: string
}

// 修复：为 ref 提供符合 UserInfo 接口的初始值
let objInfo: Ref<UserInfo> = ref<UserInfo>({ id: 0, name: '' });
watch(() => route.query.userInfo, (newObj) => {
    if (newObj === undefined) return;
    objInfo.value = JSON.parse(newObj as string);
}, {immediate: true})

console.log('查看信息--页面一', route)

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

<style lang="scss" scoped>
.box1 {
    border: 1px solid red;
}
.box2 {
    border: 1px solid blue;
    input {
        border: 1px solid green;
    }
}
</style>