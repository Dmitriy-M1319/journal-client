<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Редактирование студента</h4>
        </div>
        <div class="platoon_box_item">
            <form @submit.prevent="onStudentUpdateSubmit">
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
                <label for="platoon">5. Выберите взвод: </label>
                <select v-model="platoon">
                    <option v-for="pl in platoons" :value="pl.platoon_number">
                        {{ pl.platoon_number }} взвод
                    </option>
                </select>
                <br>
                <label for="department">6. Введите название факультета в вузе:
                </label>
                <input type="text" v-model="department" />
                <br />
                <label for="group">7. Введите номер группы в вузе: </label>
                <input type="text" v-model="group_number" />
                <input class="exit_btn" type="submit" value="Обновить" />
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'StudentUpdate',
    data() {
        return {
            student: {},
            platoons: [],
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
        };

        await axios.get('http://127.0.0.1:8000/api/v1/students/' + this.$route.params.id + '/', { headers })
            .then(response => {
                this.student = response.data;
                this.surname = this.student.surname;
                this.name = this.student.name;
                this.patronymic = this.student.patronymic;
                this.military_post = this.student.military_post;
                this.platoon = this.student.platoon;
                this.military_post = this.student.military_post;
                this.department = this.student.department;
                this.group_number = this.student.group_number;
            });

        await axios.get('http://127.0.0.1:8000/api/v1/platoons/', { headers })
            .then(response => this.platoons = response.data);
    },
    methods: {
        async onStudentUpdateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
            };

            const data = {
                user: this.student.user,
                surname: this.surname,
                name: this.name,
                patronymic: this.patronymic,
                military_post: this.military_post,
                platoon: this.platoon,
                military_post: this.military_post,
                department: this.department,
                group_number: this.group_number,
            }

            await axios.put('http://127.0.0.1:8000/api/v1/students/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/platoons/' + this.platoon + '/'));
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