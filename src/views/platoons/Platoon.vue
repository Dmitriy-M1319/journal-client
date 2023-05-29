<template>
    <div class="col-6 bg-header-color p-2">
        <div class="card">
            <div class="card-header">
                <p class="fw-bold text-center mb-0">{{ platoon.platoon_number }} взвод: по списку: {{ this.count }} </p>
            </div>
            <div class="card-body">
                <p>Командир взвода: {{ this.commander.surname }}
                    {{ this.commander.name }}
                    {{ this.commander.patronymic }}
                </p>
                <p>Куратор взвода: {{ platoon.tutor.military_rank }}
                    {{ platoon.tutor.surname }}
                    {{ platoon.tutor.name }}
                    {{ platoon.tutor.patronymic }}
                </p>
                <p>Год набора: {{ platoon.year }}</p>
                <p>Приказ о зачислении: {{ platoon.order_of_enrollment }}</p>
                <router-link :to="'/platoons/' + platoon.platoon_number + '/students'"
                    class="btn btn-primary">Состав</router-link>
                <router-link v-if="!is_student && profile.teacher_role === 1" :to="'/platoons/' + platoon.platoon_number"
                    class="btn btn-success ml-auto">Редактировать</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

var commander = {};
var count = 0;

export default {
    name: 'Platoon',
    props: ['platoon'],
    mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        axios.get(this.$url + 'platoons/' + this.platoon.platoon_number + '/commander/', { headers })
            .then(response => this.commander = response.data).catch(
                error => this.commander = { surname: '', name: '', patronymic: '' }
            );

        axios.get(this.$url + 'platoons/' + this.platoon.platoon_number + '/count/', { headers })
            .then(response => this.count = response.data.count);
    },
    data() {
        return {
            commander,
            count,
            is_student: localStorage.is_student == 'true',
            profile: JSON.parse(localStorage.getItem('profile')),
            token: localStorage.token
        }
    },
}
</script>

<style scoped >
</style>