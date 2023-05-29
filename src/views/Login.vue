<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-4">
                <section id="login">
                    <div class="container">
                        <div class="text-white">
                            <h5 class="text-center">Вход в систему</h5>
                            <form @submit.prevent="onSubmit">
                                <label class="form-label" for="login">Логин:</label>
                                <input class="form-control bg-light" id="login" type="text" v-model="username">
                                <label class="form-label" for="password">Пароль:</label>
                                <input class="form-control bg-light" id="password" type="password" v-model="password">
                                <label class="form-label" for="person-type">Тип пользователя:</label>
                                <select class="form-select" v-model="person_type">
                                    <option selected>Преподаватель</option>
                                    <option>Студент</option>
                                </select>
                                <div class="row justify-content-center">
                                    <div class="col-3 mt-2">
                                        <input class="btn btn-success" type="submit" value="Войти">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            person_type: ''
        }
    },
    methods: {
        async onSubmit() {
            const data = {
                username: this.username,
                password: this.password
            };
            let headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'X-CSRFToken': Cookies.get('csrftoken')
            };

            const response = await axios.post(this.$url + 'auth/token/login/', data, { headers });
            localStorage.setItem('token', response.data.auth_token);
            localStorage.setItem('is_student', this.person_type === 'Студент');

            headers['Authorization'] = 'Token ' + localStorage.token;
            let variant = localStorage.is_student != 'true';

            if (variant) {
                await axios.get(this.$url + 'teachers/teacher_profile/', { headers })
                    .then(response => localStorage.setItem('profile', JSON.stringify(response.data)));
            } else {
                await axios.get(this.$url + 'students/student_profile/', { headers })
                    .then(response => localStorage.setItem('profile', JSON.stringify(response.data)));
            }
            this.$router.push('/');
        },
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap");

#app {
    height: 100%;
}

header {
    padding: 13px 0;
    background-color: #0067b4;
    color: white;
    font-size: large;
    font-family: "IBM Plex Sans", sans-serif;
}

body {
    background-image: url('@/assets/35.jpg');
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "IBM Plex Sans", sans-serif;
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

#login {
    padding: 10px;
    background-color: #0067b4;
    border-radius: 5px;
}
</style>