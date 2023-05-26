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
                <br />
                <label for="birth_year">8. Введите год рождения: </label>
                <input type="text" v-model="birth_year" />
                <br />
                <label for="order_of_expulsion">9. Введите номер и дату приказа об отчислении (при отчислении): </label>
                <input type="text" v-model="order_of_expulsion" />
                <br />
                <label for="marital_status">10. Введите семейное положение: </label>
                <input type="text" v-model="marital_status" />
                <br />
                <label for="address">11. Введите адрес проживания: </label>
                <input type="text" v-model="address" />
                <br />
                <label for="phone_number">12. Введите номер телефона: </label>
                <input type="text" v-model="phone_number" />
                <br />
                <label for="public_load">13. Введите общественную нагрузку: </label>
                <input type="text" v-model="public_load" />
                <br />
                <label for="sports_category">14. Введите спортивный разряд (если есть): </label>
                <input type="text" v-model="sports_category" />
                <input class="exit_btn" type="submit" value="Редактировать" />
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
        };

        await axios.get(this.$url + 'students/' + this.$route.params.id + '/', { headers })
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
                this.birth_year = this.student.birth_year;
                this.order_of_expulsion = this.student.order_of_expulsion;
                this.marital_status = this.student.marital_status;
                this.address = this.student.address;
                this.phone_number = this.student.phone_number;
                this.public_load = this.student.public_load;
                this.sports_category = this.student.sports_category;
            });

        await axios.get(this.$url + 'platoons/', { headers })
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
                birth_year: this.birth_year,
                order_of_expulsion: this.order_of_expulsion,
                marital_status: this.marital_status,
                address: this.address,
                phone_number: this.phone_number,
                public_load: this.public_load,
                sports_category: this.sports_category,
            }

            await axios.put(this.$url + 'students/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/platoons/' + this.platoon + '/'));
        }
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