<template>
    <div class="row justify-content-center pt-4">
        <div class="col-10 bg-header-color p-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="fw-bold text-center mb-0">Создание нового взвода</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onPlatoonUpdateFormSubmit" action="">
                        <label class="form-label" for="number">1. Введите номер взвода: </label>
                        <input class="form-control" type="text" v-model="number" />
                        <label class="form-label" for="tutors">2. Выберите куратора взвода: </label>
                        <select class="form-select" v-model="tutor">
                            <option v-for="teacher in this.teachers" v-bind:value="teacher.id">
                                {{ teacher.surname }} {{ teacher.name }} {{ teacher.patronymic }}
                            </option>
                        </select>
                        <label class="form-label" for="tutors">3. Выберите направление и курс: </label>
                        <select class="form-select" v-model="course">
                            <option v-for="c in this.courses" v-bind:value="c.id">
                                {{ c.direction }}, курс {{ c.course }}
                            </option>
                        </select>
                        <label class="form-label" for="tutors">4. Выберите день прихода: </label>
                        <select class="form-select" v-model="study_day">
                            <option v-for="d in this.days" v-bind:value="d.id">
                                {{ d.day }}
                            </option>
                        </select>

                        <label class="form-label" for="year">5. Введите год набора: </label>
                        <input class="form-control" type="text" v-model="year" />

                        <label class="form-label" for="year">6. Введите приказ о зачислении: </label>
                        <input class="form-control" type="text" v-model="enrollment" />
                        <div class="row justify-content-center mt-2">
                            <div class="col-2">
                                <input class="btn btn-success" type="submit" value="Редактировать" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col justify-content-center">
                    <router-link class="btn btn-primary" :to="'/platoons/' + $route.params.number + '/students/create'">
                        Добавить нового студента
                    </router-link>
                </div>
                <div class="col justify-content-center">
                    <router-link class="btn btn-primary" :to="'/platoons/' + $route.params.number + '/students/update'">
                        Редактировать состав
                    </router-link>
                </div>
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
            edited_platoon: {},
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
            course: 0,
            study_day: 0,
            number: '0',
            year: 0,
            enrollment: ''
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'platoons/' + this.$route.params.number + '/', { headers })
            .then(response => {
                console.log(response.data);
                this.edited_platoon = response.data
                console.log(this.edited_platoon);
            });

        await axios.get(this.$url + 'platoons/' + this.$route.params.number + '/students/', { headers })
            .then(response => {
                this.platoon_students = response.data;
            });

        await axios.get(this.$url + 'teachers/', { headers })
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

        await axios.get(this.$url + 'directions/', { headers })
            .then(response => this.courses = response.data);

        this.number = this.edited_platoon.platoon_number;
        this.year = this.edited_platoon.year;
        this.study_day = this.edited_platoon.study_day;
        this.enrollment = this.edited_platoon.order_of_enrollment;

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
                order_of_enrollment: enrollment,
                status: 'учится'
            };

            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };
            await axios.put(this.$url + 'platoons/' + this.$route.params.number + '/', data, { headers })
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