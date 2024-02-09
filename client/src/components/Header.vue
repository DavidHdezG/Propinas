<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {useTipsStore} from '../stores';
const tipsStore = useTipsStore();
const totalMoney = ref(0);

const formatAmount = (amount: number) => {
  return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}
onMounted(async () => {
    totalMoney.value = await tipsStore.getTotalCash();
});
</script>
<template>
    <div class="flex justify-between max-h-[100px] min-h-[100px]  bg-white border-2 border-gray border-l-transparent border-t-transparent border-r-transparent w-full">
        <div class="flex justify-between items-center w-full">
            <div class="flex items-center justify-between w-[250px]">
                <a href="" class="flex items-center text-primary">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"/></svg>
                    </div>
                    <span class="text-xs font-semibold">Atrás</span>
                </a>
                <span class="font-bold text-xl text-black">
                    Pago de Propinas
                </span>
            </div>
            <div class="flex flex-col">
                <div class="flex justify-end">
                    <span class="text-primary text-xs font-semibold">
                        Efectivo en Caja
                    </span>
                </div>
                <div class="bg-[#FBDEDA] rounded-xl py-2 px-4">
                    <span class="text-primary font-bold text-3xl">
                        {{ formatAmount(totalMoney) }}
                    </span>
                </div>
            </div>
        </div>
        <div>

        </div>


    </div>
</template>