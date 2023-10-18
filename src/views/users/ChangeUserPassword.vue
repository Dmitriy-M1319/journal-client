<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Смена текущего пароля</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onChangePasswordSubmit">
                        <label class="form-label" for="current_password">1. Введите старый пароль: </label>
                        <input class="form-control" required type="password" v-model="current_password" />
                        <label class="form-label" for="new_password_first">2. Введите новый пароль: </label>
                        <input class="form-control" required type="password" v-model="new_password_first" />
                        <label class="form-label" for="new_password_second">3. Повторите пароль: </label>
                        <input class="form-control" required type="password" v-model="new_password_second" />
                        <div class="row justify-content-center pt-3">
                            <div class="col-2">
                                <input class="btn btn-success" type="submit" value="Сменить" />
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
    name: 'ChangeUserPassword',
    data() {
        return {
            current_password: '',
            new_password_first: '',
            new_password_second: '',
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
        async onChangePasswordSubmit() {
            if (this.new_password_first !== this.new_password_second) {
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
                current_password: this.current_password,
                new_password: this.new_password_first,
            }

            await axios.post(this.$url + 'auth/users/set_password/', data, { headers })
                .then(response => this.$router.push('/'))
                //TODO: Сделать преобразование всех ошибок в одну строку
                .catch(error => this.sh_error(error.response.data['current_password'][0]));
        },
    },
}
</script>
