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
                <p>Куратор взвода: {{ this.tutor.military_rank }}
                    {{ this.tutor.surname }}
                    {{ this.tutor.name }}
                    {{ this.tutor.patronymic }}
                </p>
                <p>Год набора: {{ platoon.year }}</p>
                <p>Приказ о зачислении: {{ platoon.order_of_enrollment }}</p>
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <router-link :to="'/platoons/' + platoon.platoon_number + '/students'"
                                class="btn btn-primary">Состав</router-link>
                        </div>
                        <div class="col-2">
                            <router-link v-if="!is_student && profile.teacher_role === 1"
                                :to="'/platoons/' + platoon.platoon_number"
                                class="btn btn-success ml-auto">Редактировать</router-link>
                        </div>
                    </div>
                </div>
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
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'platoons/' + this.platoon.platoon_number + '/commander/', { headers })
            .then(response => this.commander = response.data).catch(
                error => this.commander = { surname: '', name: '', patronymic: '' }
            );

        await axios.get(this.$url + 'platoons/' + this.platoon.platoon_number + '/count/', { headers })
            .then(response => this.count = response.data.count);

        await axios.get(this.$url + 'platoons/' + this.platoon.platoon_number + '/tutor/', { headers })
            .then(response => this.tutor = response.data);
    },
    data() {
        return {
            commander,
            count,
            is_student: localStorage.is_student == 'true',
            profile: JSON.parse(localStorage.getItem('profile')),
            token: localStorage.token,
            tutor: {}
        }
    },
}
</script>

<style scoped ></style>