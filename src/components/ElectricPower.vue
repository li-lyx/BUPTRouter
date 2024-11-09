<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

const formula = ref('P = UI');
const options = ref(['P = UI', 'P = I^2R']);

const current = ref();
const voltage = ref();
const resistance = ref();
const power = ref(0);

function calculate1() {
    power.value = voltage.value * current.value;
}
function calculate2() {
    power.value = current.value * current.value * resistance.value;
}
</script>

<template>
    <div class="flex-col items-center justify-center border rounded-md px-10">
        <div class="formula text-2xl font-bold m-10 flex items-center justify-center">
            计算公式：
            <SelectButton v-model="formula" :options="options" />
        </div>
        <div v-if="formula === 'P = UI'" class="input flex flex-col">
            <div class="flex">
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电压</label>
                    <InputNumber v-model="voltage" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电流</label>
                    <InputNumber v-model="current" inputId="integeronly" fluid />
                </div>
            </div>
            <div class="m-5">
                <Button label="开始计算" severity="contrast" @click="calculate1()" />
            </div>
        </div>
        <div v-if="formula === 'P = I^2R'" class="input flex flex-col">
            <div class="flex">
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电流</label>
                    <InputNumber v-model="current" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电阻</label>
                    <InputNumber v-model="resistance" inputId="integeronly" fluid />
                </div>
            </div>
            <div class="m-5">
                <Button label="开始计算" severity="contrast" @click="calculate2()" />
            </div>
        </div>
        <div v-if="formula === 'P = UI'" class="result text-xl font-bold m-10">
            P=UI={{ power.toFixed(2) }}
        </div>
        <div v-if="formula === 'P = I^2R'" class="result text-xl font-bold m-10">
            P=I^2R={{ power.toFixed(2) }}
        </div>
    </div>
</template>

<style scoped></style>