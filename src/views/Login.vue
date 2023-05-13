<template>
    <div>
        <div class="center_div vuz_header">
            <h2>Военный учебный центр при ВГУ</h2>
        </div>
        <div class="center_div vuz_login_form">
            <h3>Вход в электронный журнал</h3>
            <form @submit.prevent="onSubmit">
                <div class="center">
                    <table>
                        <tr>
                            <td><label for="login_field">Логин:</label></td>
                            <td><input id="login_field" type="text" v-model="username" /></td>
                        </tr>
                        <tr>
                            <td><label for="password_field">Пароль:</label></td>
                            <td><input id="password_field" type="password" v-model="password" /></td>
                        </tr>
                        <tr>
                            <td><label for="type">Тип пользователя:</label></td>
                            <td>
                                <select v-model="person_type">
                                    <option>Студент</option>
                                    <option>Преподаватель</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
                <input class="common_btn" type="submit" value="Войти" />
            </form>
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
        onSubmit() {
            const data = {
                username: this.username,
                password: this.password
            };
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'X-CSRFToken': Cookies.get('csrftoken')
            };

            axios.post('http://127.0.0.1:8000/auth/token/login/', data, {headers})
            .then(response => this.$parent.$emit('login', response.data.auth_token, this.person_type));
            this.$router.push('/');

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
</style>