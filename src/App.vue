<template>
    <div id="app">
        <div v-if="this.is_token">
            <div class="header">
                <h3>Военный учебный центр при ВГУ</h3>
                <form @submit="logout">
                    <button class="exit_btn">Выйти</button>
                </form>
            </div>
            <div class="navigation">
                <ul>
                    <li><router-link to="/">МОЙ ПРОФИЛЬ</router-link></li>
                    <li><router-link to="/platoons">СПИСОК ВЗВОДОВ</router-link></li>
                    <li v-if="!is_student"><router-link to="/timetable">РАСПИСАНИЕ</router-link></li>
                    <li v-else><router-link to="/classes">МОИ ЗАНЯТИЯ</router-link></li>
                    <li><router-link to="/subjects">СПИСОК ПРЕДМЕТОВ</router-link></li>
                    <li><router-link to="/journal">ОЦЕНКИ</router-link></li>
                    <li><router-link to="/teachers">ПРЕПОДАВАТЕЛИ</router-link></li>
                </ul>
            </div>
        </div>
        <router-view :is_student="!this.is_student" :profile="this.profile"/>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: 'App',
    created() {
        if (!localStorage.getItem('token')) {
            this.$router.push('/login');
            this.$on('login');
        }
    },
    components: {
    },
    data() {
        return {
            is_student: false,
            profile: {},
            is_token: false,
        }
    },
    mounted() {
        if (localStorage.getItem('profile')) {
           this.is_token = true;
           this.profile = JSON.parse(localStorage.getItem('profile'));
        } else {
            if(localStorage.getItem('token')){ 
                this.getProfile();
            }
        }
    },
    methods: {
        async getProfile() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };
            this.is_student = !(!(localStorage.is_student));
            if (this.is_student) {
                await axios.get(this.$url +  'teachers/teacher_profile/', { headers })
                    .then(response => localStorage.setItem('profile', JSON.stringify(response.data)));
            } else {
                await axios.get(this.$url + 'students/student_profile/', { headers })
                    .then(response => localStorage.setItem('profile', JSON.stringify(response.data)));
            }

            this.profile = JSON.parse(localStorage.getItem('profile'));
            console.log(this.profile);
            this.is_token = true;
        },
        logout() {
            const headers = {
                'accept': "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {}
            const response = axios.post(this.$url + 'auth/token/logout/', data, { headers });
            localStorage.clear();
            this.is_token = false;
            this.$router.push('/login');
        }
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap");

body {
    background-color: #ccc;
    justify-content: center;
    font-family: "IBM Plex Sans", sans-serif;
}

.center_div {
    margin: 0 auto;
    /* width: 100%; */
}

.vuz_header {
    color: aliceblue;
    background-color: red;
    padding: 15px;
    border-radius: 20px;
    margin-bottom: 10px;
}

.vuz_header h2 {
    text-align: center;
}

.vuz_login_form {
    color: aliceblue;
    background-color: #4d8bc3;
    padding: 5px;
    border-radius: 20px;
}

.vuz_login_form h3 {
    text-align: center;
}

.center {
    display: flex;
    justify-content: center;
}

.vuz_login_form input {
    border: none;
    border-bottom: 1px solid #cccccc;
    border-radius: 5px;
}

.common_btn {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: #000;
    display: block;
    width: 120px;
    margin: 20px auto;
    font-size: 14px;
    text-align: center;
    height: 25px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 4px 6px;
    vertical-align: middle;
    text-decoration: none;
}

.exit_btn {
    background-color: #4d8bc3;
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

.profile_body {
    background-color: #f6f5f4;
}

.header {
    background-color: #e01b24;
    color: aliceblue;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 5px;
}

.header h3 {
    width: 50%;
}

.header form {
    margin-left: 35%;
}

.header form button:hover {
    background-color: #1a5fb4;
}

.navigation {
    background-color: #c0bfbc;
    border-radius: 5px;
    height: 38px;
    margin-bottom: 5px;
}

.navigation ul {
    list-style-type: none;
    margin: 0;
    padding-top: 8px;
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
    height: 30px;
}

.navigation ul li {
    display: inline;
}

.navigation ul li a {
    color: #000;
    text-align: center;
    text-decoration: none;
    padding: 8px 4px;
}

.navigation ul li a:hover {
    background-color: #9a9996;
    border-radius: 5px;
}
</style>
