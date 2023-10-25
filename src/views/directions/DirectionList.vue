<template>
    <div class="row justify-content-center">
        <div class="col-6 bg-header-color m-2 p-2">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-9 col-sm-7">
                            <h4 class="fw-bold text-uppercase">Список направлений</h4>
                        </div>
                        <div class="col-md-3 col-sm-5 d-flex justify-content-end">
                            <router-link class="btn btn-success" to="/directions/create">+</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-0">
            <ul>
                <Direction v-for="d in directions" v-bind:direction="d" v-bind:token="token" v-bind:profile="profile" />
            </ul>
        </div>
    </div>
</template>

<script>

import Direction from './Direction.vue';
import axios from 'axios';

export default {
    name: 'DirectionList',
    components: {
        Direction
    },
    data() {
        return {
            directions: [],
            profile: {},
            token: ''
        }
    },
    async mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.token = localStorage.token;
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'directions/', { headers })
            .then(response => {
                this.directions = response.data;
            });
    },
}

</script>