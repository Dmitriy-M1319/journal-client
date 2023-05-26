<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h3 style="text-align: center">МОИ ЗАНЯТИЯ</h3>
        </div>
        <ul>
            <Class v-for="classes in all_classes" v-bind:classes="classes" v-bind:token="token" v-bind:profile="profile"/>
        </ul>
        <router-link class="mark_edit_btn" to="/classes/create" v-bind:token="token"
        v-bind:profile="profile">Создать новое</router-link>
    </div>
</template>


<script>
import Class from './Class.vue';
import axios from 'axios';

export default {
    name: 'ClassesList',
    props: ['profile', 'token'],
    components: {
        Class
    },
    data() {
        return {
            all_classes: []
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        await axios(this.$url + 'teachers/' + this.profile.id + '/timetable/', { headers })
            .then(response => this.all_classes = response.data);
    }
}

</script>

<style>
.mark_edit_btn {
    background-color: #26a269;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 100px;
    margin: 20px auto;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    height: 25px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 1px 6px;
    vertical-align: middle;
    text-decoration: none;
}
</style>
