import { createRouter, createWebHistory } from 'vue-router';
import Current from '../components/Current.vue';
import Voltage from '../components/Voltage.vue';
import Resistance from '../components/Resistance.vue';
import ElectricWork from '../components/ElectricWork.vue';
import ElectricPower from '../components/ElectricPower.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/CurrentCalculation',
            component: Current
        },
        {
            path: '/VoltageCalculation',
            component: Voltage
        },
        {
            path: '/ResistanceCalculation',
            component: Resistance
        },
        {
            path: '/ElectricWorkCalculation',
            component: ElectricWork
        },
        {
            path: '/ElectricPowerCalculation',
            component: ElectricPower
        },
    ]
});

export default router;