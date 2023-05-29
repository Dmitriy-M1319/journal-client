<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Редактирование предмета</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onSubjectUpdateSubmit">
                                <label class=" form-label" for="name">1. Введите название предмета: </label>
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
                            <div class="col-6 d-flex justify-content-end">
                                <button class="btn btn-success" type="submit">Редактировать</button>
                            </div>
                            <div class="col-6">
                                <form @submit.prevent="onSubjectDeleteSubmit">
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

export default {
    name: 'SubjectUpdate',
    props: ['token'],
    data() {
        return {
            subject: {},
            teachers: [],
            directions: [],
            name: '',
            teacher: 0,
            hours_count: 0,
            direction: 0,
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
            .then(response => this.teachers = response.data);

        await axios.get(this.$url + 'directions/', { headers })
            .then(response => this.directions = response.data);

        await axios.get(this.$url + 'subjects/' + this.$route.params.id + '/', { headers })
            .then(response => {
                this.subject = response.data;
                this.name = this.subject.name;
                this.teacher = this.subject.teacher;
                this.hours_count = this.subject.hours_count;
                this.direction = this.subject.direction;
                this.form = this.subject.form;
            });
    },
    methods: {
        async onSubjectUpdateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {
                name: this.name,
                teacher: this.teacher,
                hours_count: this.hours_count,
                form: this.form,
                direction: this.direction
            }
            console.log(data);
            console.log(headers);
            await axios.put(this.$url + 'subjects/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/subjects'));
        },
        async onSubjectDeleteSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            await axios.delete(this.$url + 'subjects/' + this.$route.params.id + '/', { headers })
                .then(response => this.$router.push('/subjects'));
        }
    },
}
</script>

<style>
.delete_btn {
    background-color: #e01b24;
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

.exit_btn {
    background-color: #4d8bc3;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 120px;
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
</style>