import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios';
export const useTipsStore = defineStore('tips',()=>{
    const totalCash = ref(0)
    const totalTips = ref(0)

    async function getTotalCash(){
        const res=await axios.get('http://localhost:3000/api/tipPayments/totalMoney')
        return res.data
    }

    async function getTotalTips(){
        const res= await axios.get('http://localhost:3000/api/tipPayments/totalTips') 
        return res.data;
    }

    async function createPayment(payment){
        const res= await axios.post('http://localhost:3000/api/tipPayments',{
            "totalTips":payment.totalTips,
            "tipDivision":payment.tipDivision,
            "payList":payment.payList,
        })
        return res.data;
    }
    return { totalCash, totalTips, getTotalCash, getTotalTips, createPayment}
})
