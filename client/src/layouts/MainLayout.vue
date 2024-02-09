<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
</script>
<template>
    <div class="flex h-screen">
        <div>
            <Sidebar></Sidebar>
        </div>
        <div class="flex flex-col w-[calc(100%-50px)] px-8">
            <Header></Header>
            <slot/>
        </div>
    </div>
</template>