<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создание предмета</h4>
            <form @submit.prevent="onSubjectCreateSubmit">
                <label for="name">1. Введите название предмета: </label>
                <input style="margin-bottom: 5px" type="text" v-model="name" />
                <br />
                <label for="teachers">2. Выберите преподавателя: </label>
                <select style="margin-bottom: 5px" v-model="teacher">
                    <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.surname }}
                        {{ teacher.name }}
                        {{ teacher.patronymic }}</option>
                </select>
                <br>
                <label for="directions">3. Выберите направление и курс: </label>
                <select v-model="direction">
                    <option v-for="c in directions" v-bind:value="c.id">
                        {{ c.direction }}, курс {{ c.course }}
                    </option>
                </select>
                <br />
                <label for="hours">4. Введите количество часов: </label>
                <input style="margin-bottom: 5px" type="text" v-model="hours_count" />
                <br />
                <label for="form">5. Выберите форму отчетности: </label>
                <p><input type="radio" v-model="form" checked value="экзамен" />Экзамен</p>
                <p><input type="radio" v-model="form" value="зачет" />Зачет</p>
                <button class="mark_edit_btn" type="submit">Создать</button>
            </form>
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
            'Authorization': 'Token ' + this.token,
        };

        await axios.get('http://127.0.0.1:8000/api/v1/teachers/', { headers })
            .then(response => {
                this.teachers = response.data;
                console.log(this.teachers);
            });

        await axios.get('http://127.0.0.1:8000/api/v1/directions/', { headers })
            .then(response => this.directions = response.data);

    },
    methods: {
        async onSubjectCreateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };

            const data = {
                name: this.name,
                teacher: this.teacher,
                hours_count: this.hours_count,
                direction: this.direction,
                form: this.form
            }
            await axios.post('http://127.0.0.1:8000/api/v1/subjects/', data, { headers })
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

.mark_edit_btn {
    background-color: #26a269;
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
</style>