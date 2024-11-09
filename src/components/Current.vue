<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { ref } from 'vue';

const electricity = ref(0)
const resistance = ref()
const voltage = ref();

function calculate() {
    if (resistance.value === 0) {
        alert('无效的电阻值！');
    }
    else {
        electricity.value = voltage.value / resistance.value;
    }
}
</script>

<template>
    <div class="flex-col items-center justify-center border rounded-md px-10">
        <div class="formula text-2xl font-bold m-10">
            计算公式：I = U/R
        </div>
        <div class="input flex flex-col">
            <div class="flex">
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2"> 电压 </label>
                    <InputNumber v-model="voltage" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2"> 电阻 </label>
                    <InputNumber v-model="resistance" inputId="integeronly" fluid :invalid="resistance === 0" />
                </div>
            </div>
            <div class="m-5">
                <Button label="开始计算" severity="contrast" @click="calculate()" />
            </div>
        </div>
        <div class="result text-xl font-bold m-10">
            I=U/R={{ electricity.toFixed(2) }}
        </div>
    </div>
</template>

<style scoped></style>