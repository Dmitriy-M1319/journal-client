<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Редактирование предмета</h4>
            <form @submit.prevent="onSubjectUpdateSubmit">
                <label for="name">1. Введите название предмета: </label>
                <input style="margin-bottom: 5px" type="text" v-model="name" />
                <br />
                <label for="teachers">2. Выберите преподавателя: </label>
                <select style="margin-bottom: 5px" name="teachers" id="teacher">
                    <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.surname }}
                        {{ teacher.name }}
                        {{ teacher.patronymic }}</option>
                </select>
                <br />
                <label for="hours">3. Введите количество часов: </label>
                <input style="margin-bottom: 5px" type="text" v-model="hours_count" />
                <br />
                <label for="form">4. Выберите форму отчетности: </label>
                <p><input type="radio" v-model="form" checked value="экзамен" />Экзамен</p>
                <p><input type="radio" v-model="form" value="зачет" />Зачет</p>
                <button class="exit_btn" type="submit">Редактировать</button>
            </form>
            <form @submit.prevent="onSubjectDeleteSubmit">
                <button class="delete_btn" type="submit">Удалить</button>
            </form>
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
            name: '',
            teacher: 0,
            hours_count: 0,
            form: ''
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        await axios.get(this.$url + 'teachers/', { headers })
            .then(response => this.teachers = response.data);

        await axios.get(this.$url + 'subjects/' + this.$route.params.id + '/', { headers })
            .then(response => {
                this.subject = response.data;
                this.name = this.subject.name;
                this.teacher = this.subject.teacher;
                this.hours_count = this.subject.hours_count;
                this.form = this.subject.form;
            });
    },
    methods: {
        async onSubjectUpdateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };

            const data = {
                name: this.name,
                teacher: this.teacher,
                hours_count: this.hours_count,
                form: this.form
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
                'Authorization': 'Token ' + this.token,
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