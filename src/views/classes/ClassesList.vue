<template>
    <div class="row justify-content-center">
        <div class="col-10 bg-header-color m-3 p-3">
            <div class="card">
                <div class="card-header">
                    <h3 class="text-center">Мои занятия</h3>
                </div>
                <div class="card-body p-2">
                    <div class="bg-header-color">
                        <ul class="list-unstyled overflow-y-auto overflow-x-hidden" style="height: 700px;">
                            <Class v-for="classes in all_classes" v-bind:classes="classes" v-bind:token="token"
                                v-bind:profile="profile" />
                        </ul>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row justify-content-center">
                        <div class="col-2">
                            <router-link class="btn btn-success" to="/classes/create" v-bind:token="token"
                                v-bind:profile="profile">Создать
                                новое</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Class from './Class.vue';
import axios from 'axios';

export default {
    name: 'ClassesList',
    components: {
        Class
    },
    data() {
        return {
            all_classes: [],
            profile: {},
        }
    },
    async mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios(this.$url + 'teachers/' + this.profile.id + '/timetable/', { headers })
            .then(response => this.all_classes = response.data);
    }
}

</script>

<style>
</style>
