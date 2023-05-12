<template>
    <div>
        <div class="platoon_box">
            <ul>
                <Platoon v-for="pl in platoons"
                :key="pl.number"
                v-bind:platoon="pl" />
            </ul>
        </div>
    </div>
</template>

<script>
import Platoon from './Platoon.vue';
export default {
    name: 'Platoons',
    components: {
        Platoon
    },
    data() {
        return {
            platoons: [
                {
                    number: 451,
                    count: 15,
                    com: {
                        surname: 'Фамилия',
                        name: 'Имя',
                        patronymic: 'Отчество'
                    },
                    tutor: {
                        surname: 'Фамилия',
                        name: 'Имя',
                        patronymic: 'Отчество',
                        military_rank: 'звание'
                    },
                    year: 2020
                },
                {
                    number: 452,
                    count: 15,
                    com: {
                        surname: 'Фамилия',
                        name: 'Имя',
                        patronymic: 'Отчество'
                    },
                    tutor: {
                        surname: 'Фамилия',
                        name: 'Имя',
                        patronymic: 'Отчество',
                        military_rank: 'звание'
                    },
                    year: 2020
                },
                {
                    number: 551,
                    count: 15,
                    com: {
                        surname: 'Фамилия',
                        name: 'Имя',
                        patronymic: 'Отчество'
                    },
                    tutor: {
                        surname: 'Фамилия',
                        name: 'Имя',
                        patronymic: 'Отчество',
                        military_rank: 'звание'
                    },
                    year: 2020
                },
            ]
        }
    }
}
</script>

<style scoped>
.platoon_box {
  background-color: #4d8bc3;
  padding: 15px;
  border-radius: 5px;
}
.platoon_box ul {
  list-style-type: none;
  padding: 0;
}
</style>