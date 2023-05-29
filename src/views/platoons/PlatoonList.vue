<template>
    <div class="container overflow-hidden pt-4">
        <div class="row g-4">
            <div class="col-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-body">
                        <h4 class="text-center fw-bold text-uppercase">Список взводов</h4>
                    </div>
                </div>
            </div>
            <Platoon v-for="pl in this.platoons" :key="pl.platoon_number" v-bind:platoon="pl" />
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
.bg-header-color {
    background-color: #0067b4;
    border-radius: 5px;
}
</style>