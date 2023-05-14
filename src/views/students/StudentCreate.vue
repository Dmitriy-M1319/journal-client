<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создание нового студента</h4>
        </div>
        <div class="platoon_box_item">
            <form @submit.prevent="onStudentCreateSubmit">
                <label for="surname">1. Введите фамилию: </label>
                <input type="text" v-model="surname" />
                <br />
                <label for="name">2. Введите имя: </label>
                <input type="text" v-model="name" />
                <br />
                <label for="patronymic">3. Введите отчество (если есть): </label>
                <input type="text" v-model="patronymic" />
                <br />
                <label for="post">4. Выберите воинскую должность: </label>
                <div style="margin-bottom: 5px">
                    <input type="radio" checked v-model="military_post" value="студент" />Студент
                    <br />
                    <input type="radio" v-model="military_post" value="командир взвода" />Командир взвода
                </div>
                <label for="department">5. Введите название факультета в вузе:
                </label>
                <input type="text" v-model="department" />
                <br />
                <label for="group">6. Введите номер группы в вузе: </label>
                <input type="text" v-model="group_number" />
                <br>
                <label for="rank">7. Выберите логин студента: </label>
                <select v-model="user">
                    <option v-for="u in users" :value="u.id">{{ u.username }}</option>
                </select>
                <input class="exit_btn" type="submit" value="Добавить" />
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

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
            military_post: '',
            department: '',
            group_number: 0
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        await axios.get('http://127.0.0.1:8000/api/v1/platoons/' + this.$route.params.number + '/', { headers })
            .then(response => {
                this.platoon = response.data;
            });

        await axios.get('http://127.0.0.1:8000/api/v1/teachers/logins/', { headers })
            .then(response => {
                this.users = response.data;
            });
    },
    methods: {
        async onStudentCreateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
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
            }

            await axios.post('http://127.0.0.1:8000/api/v1/students/', data, { headers })
                .then(response => this.$router.push('/platoons/' + this.platoon.platoon_number + '/'));
        }
    },
}
</script>

<style>
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