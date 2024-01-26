<template>
   <h1>{{ counterStores.count }}</h1>

   <button @click="counterStores.increaseCounter">Increase</button>
   <button @click="counterStores.decreaseCounter">Decrease</button>
</template>

<script setup>
import {counterStore} from '@/stores/counter'

const counterStores = counterStore()


</script>