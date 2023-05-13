<template>
    <div>
        <div class="platoon_box">
            <ul>
                <Platoon v-for="pl in this.platoons"
                :key="pl.platoon_number"
                v-bind:platoon="pl" 
                v-bind:is_student="is_student"
                v-bind:profile="profile"
                v-bind:token="token"/>
            </ul>
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
                'Authorization': 'Token ' + this.token,
            };
        axios.get('http://127.0.0.1:8000/api/v1/platoons/', {headers})
        .then(response => {
            platoons = response.data;
            console.log(platoons);
            for(var pl of platoons) {
                axios.get('http://127.0.0.1:8000/api/v1/platoons/' + pl.platoon_number + '/tutor/', {headers})
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
</style>