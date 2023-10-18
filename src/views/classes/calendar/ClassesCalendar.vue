<template>
    <div>
        <div class="row justify-content-center p-2">
            <div class="col-10 bg-header-color p-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h4 class="fw-bold text-uppercase ">Календарь занятий на {{ year }} год</h4>
                            </div>
                            <div class="col d-flex justify-content-end">
                                <router-link class="btn btn-success" to="/classes/create" v-bind:profile="profile">+</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center p-2">
            <div class="col-10 bg-header-color p-2">
                <div class="card">
                    <div class="card-body p-2">
                        <div class="container p-4">
                            <div class="row">
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="1" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="2" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="3" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="4" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="5" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="6" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="7" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="8" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="9" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="10" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="11" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                                <div class="col">
                                    <CalendarMonth v-bind:month_number="12" v-bind:month_classes="this.classes_dates"
                                        v-bind:year="year" v-if="show" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CalendarMonth from './CalendarMonth.vue';

export default {
    name: "ClassesCalendar",
    components: { CalendarMonth },
    data() {
        return {
            classes_dates: {},
            year: new Date().getFullYear(),
            show: false
        };
    },
    async mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };
        await axios.get(this.$url + 'teachers/' + this.profile.id + '/classes_dates/' +
            '?year=' + this.year, { headers })
            .then(response => this.classes_dates = response.data);
        console.log(this.classes_dates);
        this.show = true;
    },
}
</script>