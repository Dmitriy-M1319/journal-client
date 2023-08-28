<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Создание нового преподавателя</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onTeacherCreateSubmit">
                        <label class="form-label" for="surname">1. Введите фамилию: </label>
                        <input class="form-control" type="text" v-model="surname" />
                        <label class="form-label" for="name">2. Введите имя: </label>
                        <input class="form-control" type="text" v-model="name" />
                        <label class="form-label" for="patronymic">3. Введите отчество (если есть): </label>
                        <input class="form-control" type="text" v-model="patronymic" />
                        <label class="form-label" for="rank">4. Выберите воинское звание: </label>
                        <select class="form-select" v-model="military_rank">
                            <option v-for="r in ranks" :value="r">{{ r }}</option>
                        </select>
                        <label class="form-label" for="post">5. Введите воискую должность: </label>
                        <input class="form-control" type="text" v-model="military_post" />
                        <label class="form-label" for="cycle">6. Введите название цикла подготовки: </label>
                        <input class="form-control" type="text" v-model="cycle" />
                        <label class="form-label" for="role">7. Выберите права преподавателя: </label>
                        <div class="form-check">
                            <p><input class="form-check-input" type="radio" v-model="teacher_role" checked
                                    value="0" />Обычный преподаватель</p>
                            <p><input class="form-check-input" type="radio" v-model="teacher_role" value="1" />Преподаватель
                                с правами администратора</p>
                        </div>
                        <label class="form-label" for="rank">8. Введите логин преподавателя: </label>
                        <input class="form-control" type="text" v-model="user" />
                        <div class="row justify-content-center pt-3">
                            <div class="col-2">
                                <input class="btn btn-success" type="submit" value="Добавить" />
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

const ranks = [
    'лейтенант',
    'старший лейтенант',
    'капитан',
    'майор',
    'подполковник',
    'полковник'
];


export default {
    name: 'TeacherCreate',
    props: ['token'],
    data() {
        return {
            ranks,
            users: [],
            user: '',
            surname: '',
            name: '',
            patronymic: '',
            military_post: '',
            military_rank: '',
            teacher_role: '',
            cycle: ''
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'teachers/logins/', { headers })
            .then(response => {
                this.users = response.data;
            });
    },
    methods: {
        onTeacherCreateSubmit() {
            this.users.forEach(local_user => {
                if (local_user.username == this.user) {
                    const headers = {
                        'accept': "application/json",
                        "Content-Type": "application/json",
                        'Authorization': 'Token ' + localStorage.token,
                    };

                    const data = {
                        user: local_user.id,
                        surname: this.surname,
                        name: this.name,
                        patronymic: this.patronymic,
                        military_post: this.military_post,
                        military_rank: this.military_rank,
                        teacher_role: this.teacher_role,
                        cycle: this.cycle
                    }

                    axios.post(this.$url + 'teachers/', data, { headers })
                        .then(response => this.$router.push('/teachers'));
                }
            });

            this.$modal.show(
                ErrorModal,
                { detail: 'Введенный логин пользователя не зарегистрирован администратором' },
                { clickToClose: false, height: '180px' },
            )
        },
    },
}
</script>

<style></style>