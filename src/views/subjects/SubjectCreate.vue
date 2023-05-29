<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Создание предмета</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubjectCreateSubmit">
                        <label class="form-label" for="name">1. Введите название предмета: </label>
                        <input class="form-control" style="margin-bottom: 5px" type="text" v-model="name" />
                        <label class="form-label" for="teachers">2. Выберите преподавателя: </label>
                        <select class="form-select mb-2" v-model="teacher">
                            <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.surname }}
                                {{ teacher.name }}
                                {{ teacher.patronymic }}</option>
                        </select>
                        <label class="form-label" for="directions">3. Выберите направление и курс: </label>
                        <select class="form-select" v-model="direction">
                            <option v-for="c in directions" v-bind:value="c.id">
                                {{ c.direction }}, курс {{ c.course }}
                            </option>
                        </select>
                        <label class="form-label" for="hours">4. Введите количество часов: </label>
                        <input class="form-control" style="margin-bottom: 5px" type="text" v-model="hours_count" />
                        <label class="form-label" for="form">5. Выберите форму отчетности: </label>
                        <div class="form-check">
                            <p><input class="form-check-input" type="radio" v-model="form" checked value="экзамен" />Экзамен
                            </p>
                            <p><input class="form-check-input" type="radio" v-model="form" value="зачет" />Зачет</p>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-2">
                                <button class="btn btn-success" type="submit">Создать</button>
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

export default {
    name: 'SubjectCreate',
    props: ['token'],
    data() {
        return {
            teachers: [],
            directions: [],
            name: '',
            teacher: 0,
            direction: 0,
            hours_count: 0,
            form: ''
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'teachers/', { headers })
            .then(response => {
                this.teachers = response.data;
                console.log(this.teachers);
            });

        await axios.get(this.$url + 'directions/', { headers })
            .then(response => this.directions = response.data);

    },
    methods: {
        async onSubjectCreateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {
                name: this.name,
                teacher: this.teacher,
                hours_count: this.hours_count,
                direction: this.direction,
                form: this.form
            }
            await axios.post(this.$url + 'subjects/', data, { headers })
                .then(response => this.$router.push('/subjects'));
        }
    },
}
</script>

<style>
</style>