<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Редактирование преподавателя</h4>
        </div>
        <div class="platoon_box_item">
            <form @submit.prevent="onTeacherUpdateSubmit">
                <label for="surname">1. Введите фамилию: </label>
                <input type="text" v-model="surname" />
                <br />
                <label for="name">2. Введите имя: </label>
                <input type="text" v-model="name" />
                <br />
                <label for="patronymic">3. Введите отчество (если есть): </label>
                <input type="text" v-model="patronymic" />
                <br />
                <label for="rank">4. Выберите воинское звание: </label>
                <select v-model="military_rank">
                    <option v-for="r in ranks" :value="r">{{ r }}</option>
                </select>
                <br />
                <label for="post">5. Введите воискую должность: </label>
                <input type="text" v-model="military_post" />
                <br />
                <label for="cycle">6. Введите название цикла подготовки: </label>
                <input type="text" v-model="cycle" />
                <br>
                <label for="role">7. Выберите права преподавателя: </label>
                <p><input type="radio" v-model="teacher_role" checked value="0" />Обычный преподаватель</p>
                <p><input type="radio" v-model="teacher_role" value="1" />Преподаватель с правами администратора</p>
                <input class="exit_btn" type="submit" value="Редактировать" />
            </form>
            <form @submit.prevent="onTeacherDeleteSubmit">
                <button class="delete_btn" type="submit">Удалить</button>
            </form>
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
            'Authorization': 'Token ' + this.token,
        };

        await axios.get('http://127.0.0.1:8000/api/v1/teachers/' + this.$route.params.id + '/', { headers })
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


            await axios.put('http://127.0.0.1:8000/api/v1/teachers/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/teachers'));
        },
        async onTeacherDeleteSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };

            await axios.delete('http://127.0.0.1:8000/api/v1/teachers/' + this.$route.params.id + '/', { headers })
                .then(response => this.$router.push('/teachers'));
        },
    },
}
</script>

<style>
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

.platoon_box_item form input {
    margin-bottom: 5px;
}

.platoon_box_item form select {
    margin-bottom: 5px;
}

.platoon_box {
    background-color: #4d8bc3;
    padding: 15px;
    border-radius: 5px;
}

.platoon_box ul {
    list-style-type: none;
    padding: 0;
}

.platoon_box_item {
    background-color: #f3f3f3;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
    min-width: 950px;
    overflow: auto;
}

.platoon_box_item h4 {
    text-align: center;
    margin: 5px;
}

.platoon_box_item p {
    margin: 5px;
}

.platoon_box_item a {
    margin: 1px;
}

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
</style>