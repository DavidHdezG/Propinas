<script setup lang="ts">
import Swal from 'sweetalert2';
import html2pdf from 'html2pdf.js';
import { useTipsStore } from './stores';
const tipsStore = useTipsStore();
/* import HelloWorld from './components/HelloWorld.vue' */
import { computed, onMounted, ref } from 'vue';
import MainLayout from './layouts/MainLayout.vue'
const payList = ref([
]);
const totalTips = ref(0); //Get from backend
const typeInput = ref('');
const tipDivision = ref();
const paymentMethod = ref('');
const keyboardEnabled = ref(false);
const keyboardInput = ref('');
const payButtonEnabled = ref(false);
const removePayment = (item: any) => {
  const index = payList.value.indexOf(item);
  if (index > -1) {
    payList.value.splice(index, 1);
  }

}
const handleButtonToEnableInput = (input: string) => {
  keyboardInput.value = '';
  paymentMethod.value = '';
  if (typeInput.value === input) {
    typeInput.value = '';
    keyboardEnabled.value = false;

    return;
  }


  keyboardEnabled.value = true;
  typeInput.value = input;
}
const confirmInput = () => {
  if (typeInput.value === 'tipDivision') {
    tipDivision.value = parseInt(keyboardInput.value);
    keyboardInput.value = '';
    keyboardEnabled.value = false;
    if (tipDivision.value !== '') {
      payButtonEnabled.value = true;
    }
  }
  else if (typeInput.value === 'totalTips') {
    totalTips.value = parseInt(keyboardInput.value);
    keyboardInput.value = '';
    keyboardEnabled.value = false;
  }
  else {
    if (totalRemaining.value < parseInt(keyboardInput.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El monto ingresado es mayor al restante por pagar',
      })
      return;
    }
    const payment = {
      paymentMethod: paymentMethod.value,
      amount: keyboardInput.value
    }
    payList.value.push(payment);
    keyboardInput.value = '';
    keyboardEnabled.value = false;
    paymentMethod.value = '';
  }
}
const handleKeyboardButton = (event: any) => {
  if (event === 'del') {
    keyboardInput.value = keyboardInput.value.slice(0, -1);
    return;
  }
  keyboardInput.value = keyboardInput.value + event.target.innerText;

}
const formatAmount = (amount: number) => {
  return `$${amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}
const tipPerPerson = computed(() => {
  const n = Number(tipDivision.value);
  if (!n) {
    return 0;
  }
  return totalTips.value / Number(tipDivision.value);
});

const totalPaid = computed(() => {
  if (payList.value.length === 0) {
    return 0;
  }
  payButtonEnabled.value = true;
  return payList.value.reduce((acc, item) => {
    return acc + parseInt(item.amount);
  }, 0);
});

const totalRemaining = computed(() => {
  return totalTips.value - totalPaid.value;
});

const createPayment = async() => {
  const payment = {
    totalTips: totalPaid.value,
    tipDivision: tipDivision.value,
    payList: JSON.stringify(payList.value)
  }
  const res= await tipsStore.createPayment(payment);
  html2pdf().from(res).save();
  Swal.fire({
    icon: 'success',
    title: 'Pago Realizado',
    text: 'El pago se ha realizado con éxito',
  })
  totalTips.value = totalTips.value-totalPaid.value;
  payList.value = [];
  tipDivision.value = '';
  keyboardInput.value = '';
  keyboardEnabled.value = false;
  paymentMethod.value = '';
  typeInput.value = '';
  payButtonEnabled.value = false;

}

onMounted(async () => {
  totalTips.value = await tipsStore.getTotalTips();
});

</script>

<template>
  <MainLayout>
    <div class="flex justify-around mt-8">
      <div class="flex flex-col items-center space-y-4">
        <div class="flex flex-col ">
          <div class="flex ">
            <span class="text-primary text-xs font-semibold">
              Total de Propinas
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="bg-[#FBDEDA] rounded-xl py-2 px-4">
              <span class="text-primary font-bold text-3xl">
                {{ formatAmount(totalTips) }}
              </span>

            </div>
            <button @click="handleButtonToEnableInput('totalTips')">
              <svg class="text-black" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" />
              </svg>
            </button>

          </div>
        </div>
        <div>
          <div class="flex flex-col items-center space-y-4 font-bold">
            <span class="text-lg">
              ¿Entre cuántos quieres dividir las Propinas?
            </span>
            <div class="flex w-full justify-center space-x-4 items-center">
              <div>
                <input v-model="tipDivision" @click="handleButtonToEnableInput('tipDivision')" readonly type="number"
                  placeholder="#" class="cursor-pointer w-[70px] text-center py-2 border-2 border-black rounded-2xl " />
              </div>
              <div>
                <span class="text-primary"> {{ formatAmount(tipPerPerson) }} x Persona</span>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-8 flex flex-col space-y-6">
          <div class="flex space-x-4 text-black items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M12 7.5v-2a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V10M3.84 2L9.51.52a.49.49 0 0 1 .61.36L10.4 2" />
                <rect width="3.5" height="2.5" x="10" y="7.5" rx=".5" />
              </g>
            </svg>
            <span class="font-bold text-lg">Elige un Método de Pago</span>
          </div>
          <div class="grid grid-cols-4 gap-2">
            <button @click=" handleButtonToEnableInput('Santander 1234'); paymentMethod = 'Efectivo';"
              :class="[paymentMethod === 'Efectivo' ? 'text-white bg-primary' : 'text-black border-gray border', 'flex flex-col hover:bg-primary  hover:text-white transition-colors duration-200 shadow-md items-center space-y-2 drop-shadow-lg col-span-2 py-4 px-6  rounded-xl']">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M5 6h18v12H5zm9 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M9 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2zm-8 2h2v10h16v2H1z" />
                </svg>
              </div>
              <span class="font-semibold text-sm">
                Efectivo
              </span>
            </button>
            <button @click="handleButtonToEnableInput('Santander 1234'); paymentMethod = 'Santander 1234';"
              :class="[paymentMethod === 'Santander 1234' ? 'text-white bg-primary' : 'text-black border-gray border', 'flex flex-col hover:bg-primary  hover:text-white transition-colors duration-200 shadow-md items-center  drop-shadow-lg col-span-2 py-4 px-6  rounded-xl']">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M21 6.615v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152M4 8.808h16V6.615q0-.23-.192-.423Q19.615 6 19.385 6H4.615q-.23 0-.423.192Q4 6.385 4 6.615zm0 2.384v6.193q0 .23.192.423q.193.192.423.192h14.77q.23 0 .423-.192q.192-.193.192-.423v-6.193zM4 18V6z" />
                </svg>
              </div>
              <span class="font-semibold text-sm">
                Santander 1234
              </span>
            </button>
            <button @click="handleButtonToEnableInput('Santander 1234'); paymentMethod = 'BBVA 1234';"
              :class="[paymentMethod === 'BBVA 1234' ? 'text-white bg-primary' : 'text-black border-gray border', 'flex flex-col hover:bg-primary  hover:text-white transition-colors duration-200 shadow-md items-center  drop-shadow-lg col-span-2 py-4 px-6  rounded-xl']">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M21 6.615v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152M4 8.808h16V6.615q0-.23-.192-.423Q19.615 6 19.385 6H4.615q-.23 0-.423.192Q4 6.385 4 6.615zm0 2.384v6.193q0 .23.192.423q.193.192.423.192h14.77q.23 0 .423-.192q.192-.193.192-.423v-6.193zM4 18V6z" />
                </svg>
              </div>
              <span class="font-semibold text-sm">
                BBVA 1234
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        :class="[keyboardEnabled ? 'bg-[#FDF5F3] border-2 border-primary' : 'bg-disabled', 'p-8 rounded-2xl transition-colors duration-200']">
        <div class="flex items-center border border-t-transparent border-r-transparent border-l-transparent border-black">
          <label for="" class="font-bold text-xl text-black">{{
            keyboardEnabled ? typeInput === 'tipDivision' ? '#' : '$' : ''
          }}
          </label>
          <input v-model="keyboardInput"
            :class="[keyboardEnabled ? 'bg-[#FDF5F3]' : 'bg-disabled', 'h-10 font-bold text-lg text-black text-end']"
            readonly type="number" name="" id="">
          <button class="text-[#878787]" @click="handleKeyboardButton('del')" value="del">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M9 19q-.5 0-.937-.225t-.713-.625L3 12l4.35-6.15q.275-.4.713-.625T9 5h10q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19zm10-2V7zM9 17h10V7H9l-3.55 5zm2.4-1l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6z" />
            </svg>
          </button>
        </div>
        <div class="grid grid-cols-3 py-4 gap-2 text-3xl">
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="1"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            1
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="2"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            2
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="3"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            3
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="4"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            4
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="5"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            5
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="6"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            6
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="7"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            7
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="8"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            8
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="9"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            9
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="00"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            00
          </button>
          <button @click="handleKeyboardButton" :disabled="!keyboardEnabled" value="0"
            class="bg-white border col-span-1 border-gray p-4 rounded-xl text-center font-semibold ">
            0
          </button>
          <div class="flex items-center col-span-1 p-2 rounded-xl text-center font-semibold ">
            <button @click="confirmInput"
              :class="[keyboardEnabled ? 'bg-primary' : 'bg-[#858585]', 'mx-auto  rounded-xl p-2 text-white']">
              <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8" />
              </svg>
            </button>
          </div>

        </div>
      </div>
      <div class="flex flex-col space-y-4 w-1/4">
        <span class="font-bold text-black ">
          Pagos
        </span>
        <div class="flex flex-col w-full space-y-2">
          <div v-if="payList.length == 0" class="border py-2 w-full text-black border-gray rounded-xl shadow-lg">
            <span class="ml-6 font-semibold">Sin pagos</span>
          </div>
          <div v-else v-for="item in payList"
            class="border py-2 w-full text-black border-gray rounded-xl shadow-md flex justify-between px-4">
            <div class="flex items-center">
              <div>
                <svg v-if="item.paymentMethod == 'Efectivo'" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M5 6h18v12H5zm9 3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3M9 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2zm-8 2h2v10h16v2H1z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M21 6.615v10.77q0 .69-.462 1.152q-.463.463-1.153.463H4.615q-.69 0-1.152-.462Q3 18.075 3 17.385V6.615q0-.69.463-1.152Q3.925 5 4.615 5h14.77q.69 0 1.152.463q.463.462.463 1.152M4 8.808h16V6.615q0-.23-.192-.423Q19.615 6 19.385 6H4.615q-.23 0-.423.192Q4 6.385 4 6.615zm0 2.384v6.193q0 .23.192.423q.193.192.423.192h14.77q.23 0 .423-.192q.192-.193.192-.423v-6.193zM4 18V6z" />
                </svg>
              </div>
              <span class="ml-6 font-semibold text-md">{{ item.paymentMethod }}</span>
            </div>
            <div class="flex items-center">
              <span class="font-bold">{{ formatAmount(parseInt(item.amount)) }}</span>
              <button @click="removePayment(item)">
                <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m12 13.4l-2.917 2.925q-.276.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.832 7.4 8.404q0-.427.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.276-.275.704-.275q.427 0 .704.275q.3.3.3.712t-.3.688L13.375 12l2.925 2.917q.275.276.275.704t-.275.704q-.3.3-.712.3t-.688-.3z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="flex w-full mt-10">
      <div class="flex justify-evenly w-1/2">
        <div class="flex flex-col font-bold">
          <span class="text-primary">Total Pagado</span>
          <span class="text-black">Restante por Pagar</span>
        </div>
        <div class="flex flex-col text-end font-bold">
          <span class="text-primary">{{ formatAmount(totalPaid) }}</span>
          <span class="text-black">{{ formatAmount(totalRemaining) }}</span>
        </div>
      </div>
      <div class="w-1/2">
        <button @click="createPayment()" :disabled="!payButtonEnabled"
          class="font-semibold w-full bg-primary text-white rounded-full py-3 px-4 disabled:bg-white disabled:text-gray disabled:border disabled:border-gray">
          Pagar {{ formatAmount(totalPaid) == '$0.00' ? '' : formatAmount(totalPaid) + ' en ' }} Propinas
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped></style>
