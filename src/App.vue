<script setup lang="ts">
import Menu from 'primevue/menu';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const items = ref([
  {
    label: '目录',
    icon: 'pi pi-file',
    items: [
      {
        label: '1. 电流的计算（欧姆定律）',
        icon: 'pi pi-file',
        command: () => { router.push('/CurrentCalculation') }
      },
      {
        label: '2. 电压的计算',
        icon: 'pi pi-file',
        command: () => { router.push('/VoltageCalculation') }
      },
      {
        label: '3. 电阻的计算',
        icon: 'pi pi-file',
        command: () => { router.push('/ResistanceCalculation') }
      },
      {
        label: '4. 电功的计算',
        icon: 'pi pi-file',
        command: () => { router.push('/ElectricWorkCalculation') }
      },
      {
        label: '5. 电功率的计算',
        icon: 'pi pi-file',
        command: () => { router.push('/ElectricPowerCalculation') }
      },
    ]
  },
]);
</script>

<template>
  <div class="w-full">
    <div class="absolute top-5 left-5 bottom-5 h-6/7">
      <Menu :model="items" class="h-full" />
    </div>
    <div class="flex flex-1 ml-80">
      <RouterView />
    </div>
  </div>
</template>



<style scoped></style>
