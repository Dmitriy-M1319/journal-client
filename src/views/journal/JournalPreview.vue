<template>
    <div class="container mx-auto">
        <div class="row justify-content-center p-2">
            <div class="col-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="fw-bold text-uppercase">Электронный журнал</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center p-2">
            <div class="col-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-md-5 col-sm-12">
                                <div class="row justify-content-start">
                                    <div class="col">
                                        <h5>Предмет: </h5>
                                    </div>
                                    <div class="col">
                                        <select id="subjects" v-model="subject">
                                            <option v-for="s in subjects" v-bind:value="s.id">{{ s.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!isStudent()" class="col-md-5 col-sm-12">
                                <div class="row justify-content-start">
                                    <div class="col-2">
                                        <h5>Взвод: </h5>
                                    </div>
                                    <div class="col-10">
                                        <select id="platoons" v-model="platoon">
                                            <option v-for="p in platoons" v-bind:value="p.platoon_number">{{
                                                p.platoon_number }} взвод</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div :class="{ 'col-md-7': isStudent(), 'col-md-2': !isStudent() }"
                                class="col-sm-12 d-flex justify-content-end">
                                <button class="btn btn-primary" v-on:click="onSubmit">Открыть</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <Journal v-if="is_open && !isStudent()" :key="reload" v-bind:platoon="platoon"
                            v-bind:subject="subject" />
                        <Journal v-else-if="is_open && isStudent()" :key="reload" v-bind:platoon="profile.platoon"
                            v-bind:subject="subject" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Journal from './Journal.vue';

export default {
    name: 'JournalPreview',
    props: ['token'],
    components: {
        Journal
    },
    data() {
        return {
            profile: {},
            subject: 0,
            platoon: 0,
            subjects: [],
            platoons: [],
            is_open: false,
            reload: 0
        }
    },
    async mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'platoons/', { headers })
            .then(response => this.platoons = response.data);

        await axios.get(this.$url + 'subjects/', { headers })
            .then(response => this.subjects = response.data);
    },
    methods: {
        onSubmit() {
            if (!this.isStudent()) {
                this.is_open = this.subject != 0 && this.platoon != 0;
            } else {
                this.is_open = this.subject != 0;
            }
            this.reload += 1;
            this.$forceUpdate();
        },
        isStudent() {
            return localStorage.is_student == 'true';
        }
    },
}
</script>
<style></style>