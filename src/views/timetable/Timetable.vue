<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="fw-bold text-uppercase">Расписание занятий {{ profile.platoon }} взвода</h4>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-2">
            <div class="col-md-8 col-sm-12 bg-header-color p-3">
                <div class="card">
                    <div class="card-body">
                        <TimetableDay v-for="day in timetable_data" v-bind:token="token" v-bind:timetable_day="day" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import TimetableDay from './TimetableDay.vue';
import axios from 'axios';


export default {
    name: 'Timetable',
    props: ['token',],
    components: {
        TimetableDay
    },
    data() {
        return {
            timetable_data: [],
            profile: {}
        }
    },
    async mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'platoons/' + this.profile.platoon + '/timetable/', { headers })
            .then(response => this.timetable_data = response.data);
    },
}
</script>

<style>
.timetable {
    vertical-align: center;
    text-align: center;
    border: 1px solid #000;
    table-layout: fixed;
    margin: 8px;
    border-radius: 5px;
    width: 100%;
}

.timetable-tr {
    border: 1px solid #000;
    width: 100%;
}

.timetable-td {
    border: 1px solid #000;
}
</style>