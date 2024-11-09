<script setup lang="ts">
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

const formula = ref('W = UIt');
const options = ref(['W = UIt', 'W = I^2Rt']);

const current = ref();
const voltage = ref();
const resistance = ref();
const time = ref();
const work = ref(0);

function calculate1() {
    work.value = voltage.value * current.value * time.value;
}
function calculate2() {
    work.value = current.value * current.value * resistance.value * time.value
}
</script>

<template>
    <div class="flex-col items-center justify-center border rounded-md px-10">
        <div class="formula text-2xl font-bold m-10 flex items-center justify-center">
            计算公式：
            <SelectButton v-model="formula" :options="options" />
        </div>
        <div v-if="formula === 'W = UIt'" class="input flex flex-col">
            <div class="flex">
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电压</label>
                    <InputNumber v-model="voltage" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电流</label>
                    <InputNumber v-model="current" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">时间</label>
                    <InputNumber v-model="time" inputId="integeronly" fluid />
                </div>
            </div>
            <div class="m-5">
                <Button label="开始计算" severity="contrast" @click="calculate1()" />
            </div>
        </div>
        <div v-if="formula === 'W = I^2Rt'" class="input flex flex-col">
            <div class="flex">
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电流</label>
                    <InputNumber v-model="current" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">电阻</label>
                    <InputNumber v-model="resistance" inputId="integeronly" fluid />
                </div>
                <div class="flex-auto m-5">
                    <label for="integeronly" class="font-bold block mb-2">时间</label>
                    <InputNumber v-model="time" inputId="integeronly" fluid />
                </div>
            </div>
            <div class="m-5">
                <Button label="开始计算" severity="contrast" @click="calculate2()" />
            </div>
        </div>
        <div v-if="formula === 'W = UIt'" class="result text-xl font-bold m-10">
            W=UIt={{ work.toFixed(2) }}
        </div>
        <div v-if="formula === 'W = I^2Rt'" class="result text-xl font-bold m-10">
            W=I^2Rt={{ work.toFixed(2) }}
        </div>
    </div>
</template>

<style scoped></style>