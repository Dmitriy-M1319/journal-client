<template>
    <div>
        <div class="platoon_box">
            <div class="platoon_box_item">
                <h4>Создание нового взвода</h4>
            </div>
            <div class="platoon_box_item">
                <form @submit.prevent="onPlatoonUpdateFormSubmit">
                    <label for="number">1. Введите номер взвода: </label>
                    <input type="text" v-model="number" />
                    <br />
                    <label for="tutors">2. Выберите куратора взвода: </label>
                    <select v-model="tutor">
                        <option v-for="teacher in this.teachers" v-bind:value="teacher.id">
                            {{ teacher.surname }} {{ teacher.name }} {{ teacher.patronymic }}
                        </option>
                    </select>
                    <br />
                    <label for="tutors">3. Выберите направление и курс: </label>
                    <select v-model="course">
                        <option v-for="c in this.courses" v-bind:value="c.id">
                            {{ c.direction }}, курс {{ c.course }}
                        </option>
                    </select>
                    <br />
                    <label for="tutors">4. Выберите день прихода: </label>
                    <select v-model="study_day">
                        <option v-for="d in this.days" v-bind:value="d.id">
                            {{ d.day }}
                        </option>
                    </select>
                    <br />

                    <label for="year">5. Введите год набора: </label>
                    <input type="text" v-model="year" />
                    <input class="mark-edit-btn" type="submit" value="Создать" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import PlatoonStudentsUpdate from './students/PlatoonStudentsUpdate.vue';
import axios from 'axios';


export default {
    name: 'PlatoonUpdate',
    props: ['token'],

    components: {
        PlatoonStudentsUpdate
    },
    data() {
        return {
            courses: [],
            teachers: [],
            days: [
                { id: 0, day: 'Понедельник' },
                { id: 1, day: 'Вторник' },
                { id: 2, day: 'Среда' },
                { id: 3, day: 'Четверг' },
                { id: 4, day: 'Пятница' }
            ],
            tutor: '',
            study_day: 0,
            course: 0,
            number: '0',
            year: 0
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
                for (var teacher of response.data) {
                    this.teachers.push({
                        id: teacher.id,
                        surname: teacher.surname,
                        name: teacher.name,
                        patronymic: teacher.patronymic
                    });
                }
            });

        await axios.get('http://127.0.0.1:8000/api/v1/directions/', { headers })
            .then(response => this.courses = response.data);

        console.log(this.number);

    },
    methods: {
        async onPlatoonUpdateFormSubmit() {
            const data = {
                platoon_number: this.number,
                tutor: this.tutor,
                year: this.year,
                course: this.course,
                study_day: this.study_day,
                status: 'учится'
            };

            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + this.token,
            };
            await axios.post('http://127.0.0.1:8000/api/v1/platoons/', data, { headers })
                .then(response => this.$router.push('/platoons'));
        }
    }
}
</script>

<style scoped>
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

.mark-edit-btn-long {
    width: auto;
}
</style>