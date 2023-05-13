<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создать новое занятие</h4>
        </div>
        <div class="platoon_box_item">
            <form @submit.prevent="onClassCreateSubmit">
                <label for="platoon">1. Взвод, у которого занятие: </label>
                <select v-model="platoon">
                    <option v-for="pl in platoons" :value="pl.platoon_number">
                        {{ pl.platoon_number }} взвод
                    </option>
                </select>
                <br />
                <label for="subjects">2. Предмет: </label>
                <select v-model="subject">
                    <option v-for="sub in subjects" :value="sub.id">{{ sub.name }}</option>
                </select>
                <br />
                <label for="theme_number">3. Номер темы занятия: </label>
                <input type="text" v-model="theme_number" />

                <br />
                <label for="theme_name">4. Название темы занятия: </label>
                <input type="text" v-model="theme_name" />

                <br />
                <label for="class_number">5. Номер занятия: </label>
                <input type="text" v-model="class_number" />

                <br />
                <label for="class_name">6. Название занятия: </label>
                <input type="text" v-model="class_name" />

                <br />
                <label for="class_date">7. Дата и время занятия: </label>
                <input type="datetime-local" v-bind:value="class_date" v-on:input="changeDate($event.target.value)" />

                <br />
                <label for="class_type">8. Тип занятия: </label>
                <p>
                    <input type="radio" v-model="class_type" value="лекция" />Лекция
                </p>
                <p><input type="radio" v-model="class_type" value="семинар" />Семинар</p>
                <p>
                    <input type="radio" v-model="class_type" value="экзамен" />Контрольное
                    занятие
                </p>
                <br />
                <label for="class_date">9. Номер аудитории, в которой проводится занятие:
                </label>
                <input type="text" v-model="classroom" />
                <div>
                    <input class="mark-edit-btn" type="submit" value="Создать" />
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'ClassCreate',
    props: ['token', 'profile'],
    data() {
        return {
            subjects: [],
            platoons: [],
            subject: 1,
            platoon: 0,
            class_date: '',
            theme_number: 0,
            theme_name: '',
            class_number: 0,
            class_name: '',
            class_type: '',
            classroom: 0
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        if (this.profile.teacher_role === 0) {
            await axios.get('http://127.0.0.1:8000/api/v1/teachers/' + this.profile.id + '/subjects/', { headers })
                .then(response => this.subjects = response.data);
        } else {
            await axios.get('http://127.0.0.1:8000/api/v1/subjects/', { headers })
                .then(response => this.subjects = response.data);
        }

        await axios.get('http://127.0.0.1:8000/api/v1/platoons/', { headers })
            .then(response => this.platoons = response.data);

    },
    methods: {
        changeDate(date) {
            this.class_date = date;
            console.log(date);
        },
        async onClassCreateSubmit() {
            const data = {
                subject: this.subject,
                platoon: this.platoon,
                class_date: this.class_date,
                theme_number: this.theme_number,
                theme_name: this.theme_name,
                class_number: this.class_number,
                class_name: this.class_name,
                class_type: this.class_type,
                classroom: this.classroom,
            }
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };

            await axios.post('http://127.0.0.1:8000/api/v1/classes/', data, { headers })
                .then(response => this.$router.push('/classes'));
        }
    },
}
</script>

<style>
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
.mark-edit-btn {
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