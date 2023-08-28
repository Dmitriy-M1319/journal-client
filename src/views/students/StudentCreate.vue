<template>
    <div class="row justify-content-center pt-4">
        <div class="col-7 bg-header-color p-3">
            <div class="card">
                <div class="card-header">
                    <p class="fw-bold text-center mb-0">Создание нового студента</p>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onStudentCreateSubmit">
                        <label class="form-label" for="surname">1. Введите фамилию: </label>
                        <input class="form-control" type="text" v-model="surname" />
                        <label class="form-label" for="name">2. Введите имя: </label>
                        <input class="form-control" type="text" v-model="name" />
                        <label class="form-label" for="patronymic">3. Введите отчество (если есть): </label>
                        <input class="form-control" type="text" v-model="patronymic" />
                        <label class="form-label" for="post">4. Выберите воинскую должность: </label>
                        <div class="form-check mb-3">
                            <input class="form-check-input" type="radio" checked v-model="military_post"
                                value="студент" />Студент
                            <br />
                            <input class="form-check-input" type="radio" v-model="military_post"
                                value="командир взвода" />Командир взвода
                        </div>
                        <label class="form-label" for="department">5. Введите название факультета в вузе:
                        </label>
                        <input class="form-control" type="text" v-model="department" />
                        <label class="form-label" for="rank">6. Выберите логин студента: </label>
                        <select class="form-select" v-model="user">
                            <option v-for="u in users" :value="u.id">{{ u.username }}</option>
                        </select>
                        <label class="form-label" for="group">7. Введите номер группы в вузе: </label>
                        <input class="form-control" type="text" v-model="group_number" />
                        <label class="form-label" for="birth_year">8. Введите год рождения: </label>
                        <input class="form-control" type="text" v-model="birth_year" />
                        <label class="form-label" for="order_of_expulsion">9. Введите номер и дату приказа об отчислении
                            (при отчислении):
                        </label>
                        <input class="form-control" type="text" v-model="order_of_expulsion" />
                        <label class="form-label" for="marital_status">10. Введите семейное положение: </label>
                        <input class="form-control" type="text" v-model="marital_status" />
                        <label class="form-label" for="address">11. Введите адрес проживания: </label>
                        <input class="form-control" type="text" v-model="address" />
                        <label class="form-label" for="phone_number">12. Введите номер телефона: </label>
                        <input class="form-control" type="text" v-model="phone_number" />
                        <label class="form-label" for="public_load">13. Введите общественную нагрузку: </label>
                        <input class="form-control" type="text" v-model="public_load" />
                        <label class="form-label" for="sports_category">13. Введите спортивный разряд (если есть): </label>
                        <input class="form-control" type="text" v-model="sports_category" />
                        <div class="row justify-content-center mt-2">
                            <div class="col-2">
                                <input class="btn btn-success" type="submit" value="Создать" />
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
    name: 'StudentCreate',
    props: ['token'],
    data() {
        return {
            users: [],
            platoon: {},
            user: 0,
            surname: '',
            name: '',
            patronymic: '',
            military_post: '',
            platoon: 1,
            department: '',
            group_number: 0,
            birth_year: 0,
            order_of_expulsion: '',
            marital_status: '',
            address: '',
            phone_number: '',
            public_load: '',
            sports_category: ''
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'platoons/' + this.$route.params.number + '/', { headers })
            .then(response => {
                this.platoon = response.data;
            });

        await axios.get(this.$url + 'teachers/logins/', { headers })
            .then(response => {
                this.users = response.data;
            });
    },
    methods: {
        async onStudentCreateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {
                user: this.user,
                surname: this.surname,
                name: this.name,
                patronymic: this.patronymic,
                military_post: this.military_post,
                platoon: this.platoon.platoon_number,
                military_post: this.military_post,
                department: this.department,
                group_number: this.group_number,
                birth_year: this.birth_year,
                order_of_expulsion: this.order_of_expulsion,
                marital_status: this.marital_status,
                address: this.address,
                phone_number: this.phone_number,
                public_load: this.public_load,
                sports_category: this.sports_category,
            }

            await axios.post(this.$url + 'students/', data, { headers })
                .then(response => this.$router.push('/platoons/' + this.platoon.platoon_number + '/'))
                .catch(error => {
                this.$modal.show(
                    ErrorModal,
                    { detail: error.response.data.detail},
                    { clickToClose: false, height: '180px' },
                )
                return;
            });
        }
    },
}
</script>

<style>
</style>