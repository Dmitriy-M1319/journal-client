<template>
    <div>
        <div class="platoon_box">
            <ul>
                <Platoon v-for="pl in this.platoons" :key="pl.platoon_number" v-bind:platoon="pl"
                    v-bind:is_student="is_student" v-bind:profile="profile" v-bind:token="token" />
            </ul>
            <router-link v-if="!is_student && profile.teacher_role === 1" class="mark-edit-btn" to="/platoons/create"
                v-bind:token="token">
                Создать
            </router-link>
        </div>
    </div>
</template>

<script>
import Platoon from './Platoon.vue';
import axios from 'axios';

var platoons = {};

export default {
    name: 'Platoons',
    props: ['is_student', 'profile', 'token'],
    mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };
        console.log(this.token);
        axios.get(this.$url + 'platoons/', { headers })
            .then(response => {
                platoons = response.data;
                console.log(platoons);
                for (var pl of platoons) {
                    axios.get(this.$url + 'platoons/' + pl.platoon_number + '/tutor/', { headers })
                        .then(response => pl.tutor = response.data);
                }
                console.log(platoons);
                this.platoons = platoons;
            })
            .catch(error => console.log(error));
    },
    components: {
        Platoon
    },
    data() {
        return {
            platoons
        }
    },
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

.mark-edit-btn {
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