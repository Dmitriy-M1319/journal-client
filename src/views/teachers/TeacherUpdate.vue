<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Редактирование преподавателя</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onTeacherUpdateSubmit">
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
                        <div class="row pt-3">
                            <div class="col d-flex justify-content-end">
                                <input class="btn btn-success" type="submit" value="Редактировать" />
                            </div>
                            <div class="col">
                                <form @submit.prevent="onTeacherDeleteSubmit">
                                    <button class="btn btn-danger" type="submit">Удалить</button>
                                </form>
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

const ranks = [
    'лейтенант',
    'старший лейтенант',
    'капитан',
    'майор',
    'подполковник',
    'полковник'
];


export default {
    name: 'TeacherUpdate',
    props: ['token'],
    data() {
        return {
            ranks,
            teacher: {},
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

        await axios.get(this.$url + 'teachers/' + this.$route.params.id + '/', { headers })
            .then(response => {
                this.teacher = response.data;
                this.surname = this.teacher.surname;
                this.name = this.teacher.name;
                this.patronymic = this.teacher.patronymic;
                this.military_post = this.teacher.military_post;
                this.military_rank = this.teacher.military_rank;
                this.teacher_role = this.teacher.teacher_role;
                this.cycle = this.teacher.cycle;
            });
    },
    methods: {
        async onTeacherUpdateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };

            const data = {
                user: this.teacher.user,
                surname: this.surname,
                name: this.name,
                patronymic: this.patronymic,
                military_post: this.military_post,
                military_rank: this.military_rank,
                teacher_role: this.teacher_role,
                cycle: this.cycle
            }


            await axios.put(this.$url + 'teachers/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/teachers'));
        },
        async onTeacherDeleteSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };

            await axios.delete(this.$url + 'teachers/' + this.$route.params.id + '/', { headers })
                .then(response => this.$router.push('/teachers'));
        },
    },
}
</script>

<style>
</style>