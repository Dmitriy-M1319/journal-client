<template>
    <div id="app">
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-4 d-flex align-items-center">
                        <h4>Военный учебный центр при ВГУ</h4>
                    </div>
                    <div class="col-7">
                        <div class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <div class="collapse navbar-collapse">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/"
                                                class="nav-link text-white">Главная</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/platoons"
                                                class="nav-link text-white">Список
                                                взводов</router-link>
                                        </li>
                                        <li v-if="isStudent()" class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/timetable"
                                                class="nav-link text-white">Расписание</router-link>
                                        </li>
                                        <li v-else class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/classes"
                                                class="nav-link text-white">Мои занятия</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/subjects"
                                                class="nav-link text-white">Предметы</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/journal"
                                                class="nav-link text-white">Оценки</router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link :is="isToken() ? 'router-link' : 'span'" to="/teachers"
                                                class="nav-link text-white" >Преподаватели</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 d-flex align-items-center">
                        <button v-if="!isToken()" v-on:click="onLoginSubmit" class="btn btn-outline-light">Войти</button>
                        <button v-else v-on:click="logout" class="btn btn-danger">Выйти</button>
                    </div>
                </div>
            </div>
        </header>
        <div :class="{'mask': true, ' d-flex align-items-center': !isToken()}">
            <router-view class="view" :is_student="isStudent()" :profile="this.profile" :token="isToken()" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'App',
    data() {
        return {
            is_student: false,
            profile: {},
            is_token: false,
        }
    },
    methods: {
        isToken() {
            return localStorage.token !== undefined;
        },
        isStudent() {
            let result = localStorage.is_student == 'true';
            return result

        },
        onLoginSubmit() {
            this.$router.push('/login');
        },
        logout() {
            const headers = {
                'accept': "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {}
            const response = axios.post(this.$url + 'auth/token/logout/', data, { headers });
            localStorage.clear();
            this.$forceUpdate();
        }
    }
}
</script>

<style>

#app {
    height: 100%;
    margin: 0;
    padding: 0;
}

.view {
    margin: 0;
    padding: 0;
    width: 100%;
}

header {
    padding: 13px 0;
    background-color: #0067b4;
    color: white;
    font-size: large;
}

body {
    background-image: url('@/assets/35.jpg');
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}

.bg-header-color {
    background-color: #0067b4;
    border-radius: 5px;
}

.mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

h4 {
    margin-top: 5px;
}
</style>
