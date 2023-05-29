<template>
    <li class="mb-3 ml-0">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="text-center">Аудитория {{ sub_class.classroom }}</h4>
                    </div>
                    <div class="card-body">
                        <p>Предмет: {{ subject.name }}</p>
                        <p>Взвод, у которого занятие: {{ sub_class.platoon }}</p>
                        <p>Время: {{ getTime(sub_class.class_date) }}</p>
                        <p>Тема (номер, название): № {{ sub_class.theme_number }}. {{ sub_class.theme_name }}</p>
                        <p>Занятие (номер, название): № {{ sub_class.class_number }}. {{ sub_class.class_name }} </p>
                        <p>Тип занятия: {{ sub_class.class_type }}</p>
                        <div class="row justify-content-center">
                            <div class="col-3">
                                <router-link class="btn btn-primary" :to="'/classes/' + sub_class.id" v-bind:token="token"
                                    v-bind:profile="profile">Редактировать</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Class',
    props: ['sub_class', 'token', 'profile'],
    data() {
        return {
            subject: {}
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'subjects/' + this.sub_class.subject + '/', { headers })
            .then(response => this.subject = response.data);
    },
    methods: {
        getTime(time) {
            let date_and_time = time.split('T');
            return date_and_time[1].substring(0, 5);
        }
    }
}
</script>

<style>
</style>