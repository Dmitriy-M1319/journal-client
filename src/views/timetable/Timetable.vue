<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Расписание занятий {{ profile.platoon }} взвода</h4>
        </div>
        <div class="platoon_box_item">
            <TimetableDay v-for="day in timetable_data" 
            v-bind:token="token"
            v-bind:timetable_day="day" />
        </div>
    </div>
</template>


<script>
import TimetableDay from './TimetableDay.vue';
import axios from 'axios';


export default {
    name: 'Timetable',
    props: ['token', 'profile'],
    components: {
        TimetableDay
    },
    data() {
        return {
            timetable_data: []
        }
    },
    async mounted() {
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
.platoon_box {
    background-color: #4d8bc3;
    padding: 15px;
    border-radius: 5px;
}

.platoon_box ul {
    list-style-type: none;
    padding: 0;
}

.platoon_box_item {
    background-color: #f3f3f3;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
    min-width: 950px;
    overflow: auto;
}

.platoon_box_item h4 {
    text-align: center;
    margin: 5px;
}

.platoon_box_item p {
    margin: 5px;
}

.platoon_box_item a {
    margin: 1px;
}

.platoon_box_item table {
    vertical-align: center;
    text-align: center;
    border: 1px solid #000;
    table-layout: fixed;
    margin: 8px;
    border-radius: 5px;
    width: 100%;
}

.platoon_box_item table tr{
    border: 1px solid #000;
    width: 100%;
}

.platoon_box_item table tr td {
    border: 1px solid #000;
}
</style>