<template>
    <div class="row justify-content-center p-3">
        <div class="col-10 bg-header-color p-3">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Создать новое занятие</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onClassCreateSubmit">
                        <label class="form-label" for="platoon">1. Взвод, у которого занятие: </label>
                        <select class="form-select" v-model="platoon">
                            <option v-for="pl in platoons" :value="pl.platoon_number">
                                {{ pl.platoon_number }} взвод
                            </option>
                        </select>
                        <label class="form-label" for="subjects">2. Предмет: </label>
                        <select class="form-select" v-model="subject">
                            <option v-for="sub in subjects" :value="sub.id">{{ sub.name }}</option>
                        </select>
                        <label class="form-label" for="theme_number">3. Номер темы занятия: </label>
                        <input class="form-control" type="text" v-model="theme_number" />
                        <label class="form-label" for="theme_name">4. Название темы занятия: </label>
                        <input class="form-control" type="text" v-model="theme_name" />
                        <label class="form-label" for="class_number">5. Номер занятия: </label>
                        <input class="form-control" type="text" v-model="class_number" />
                        <label for="class_name">6. Название занятия: </label>
                        <input class="form-control" type="text" v-model="class_name" />
                        <label class="form-label" for="class_date">7. Дата и время занятия: </label>
                        <input class="form-control" type="datetime-local" v-bind:value="class_date"
                            v-on:input="changeDate($event.target.value)" />
                        <label class="form-label" for="class_type">8. Тип занятия: </label>
                        <div class="form-check">
                            <p>
                                <input class="form-check-input" type="radio" v-model="class_type" value="лекция" />Лекция
                            </p>
                            <p><input class="form-check-input" type="radio" v-model="class_type" value="семинар" />Семинар
                            </p>
                            <p>
                                <input class="form-check-input" type="radio" v-model="class_type"
                                    value="экзамен" />Контрольное
                                занятие
                            </p>
                        </div>
                        <label class="form-label" for="class_date">9. Номер аудитории, в которой проводится занятие:
                        </label>
                        <input class="form-control" type="text" v-model="classroom" />
                        <div class="row justify-content-center">
                            <div class="col d-flex justify-content-end">
                                <input class="btn btn-success" type="submit" value="Редактировать" />
                            </div>
                            <div class="col">
                                <form @submit.prevent="onClassDeleteSubmit">
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
    name: 'ClassUpdate',
    props: ['token', 'profile'],
    data() {
        return {
            subjects: [],
            platoons: [],
            sub_class: {},
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
            'Authorization': 'Token ' + localStorage.token,
        };

        if (this.profile.teacher_role === 0) {
            await axios.get(this.$url + 'teachers/' + this.profile.id + '/subjects/', { headers })
                .then(response => this.subjects = response.data);
        } else {
            await axios.get(this.$url + 'subjects/', { headers })
                .then(response => this.subjects = response.data);
        }

        await axios.get(this.$url + 'platoons/', { headers })
            .then(response => this.platoons = response.data);

        await axios.get(this.$url + 'classes/' + this.$route.params.id + '/', { headers })
            .then(response => {
                this.sub_class = response.data;
                this.subject = this.sub_class.subject;
                this.platoon = this.sub_class.platoon;
                this.class_date = this.sub_class.class_date.substring(0, 16);
                this.theme_number = this.sub_class.theme_number;
                this.theme_name = this.sub_class.theme_name;
                this.class_number = this.sub_class.class_number;
                this.class_name = this.sub_class.class_name;
                this.class_type = this.sub_class.class_type;
                this.classroom = this.sub_class.classroom;
            });


    },
    methods: {
        changeDate(date) {
            this.class_date = date;
            console.log(date);
        },
        async onClassUpdateSubmit() {
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
                'Authorization': 'Token ' + localStorage.token,
            };

            await axios.put(this.$url + 'classes/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/classes'));
        },
        async onClassDeleteSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            await axios.delete(this.$url + 'classes/' + this.$route.params.id + '/', { headers })
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