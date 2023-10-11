<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Регистрация нового пользователя</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onUserRegisterSubmit">
                        <label class="form-label" for="username">1. Введите логин нового пользователя: </label>
                        <input class="form-control" required type="text" v-model="username" />
                        <label class="form-label" for="password_first">2. Введите пароль: </label>
                        <input class="form-control" required type="password" v-model="password_first" />
                        <label class="form-label" for="password_second">3. Повторите пароль: </label>
                        <input class="form-control" required type="password" v-model="password_second" />
                        <div class="row justify-content-center pt-3">
                            <div class="col-2">
                                <input class="btn btn-success" type="submit" value="Зарегистрировать" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import ErrorModal from '../ErrorModal.vue';

export default {
    name: 'RegisterNewUser',
    data() {
        return {
            username: '',
            password_first: '',
            password_second: '',
        }
    },
    methods: {
        sh_error(msg) {
            this.$modal.show(
                ErrorModal,
                { detail: msg },
                { clickToClose: false, height: '180px' },
            );
        },
        async onUserRegisterSubmit() {
            if (this.password_first !== this.password_second) {
                this.$modal.show(
                    ErrorModal,
                    { detail: 'Пароли не совпадают!' },
                    { clickToClose: false, height: '180px' },
                )
            }
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {
                username: this.username,
                email: 'vus.user@mail.com',
                password: this.password_first,
            }

            await axios.post(this.$url + 'auth/users/', data, { headers })
                .then(response => this.$router.push('/'))
                //TODO: Сделать преобразование всех ошибок в одну строку
                .catch(error => this.sh_error(error.response.data['username'][0]));
        },
    },
}
</script>
