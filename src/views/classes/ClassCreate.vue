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
                            <div class="col-2">
                                <input class="btn btn-success" type="submit" value="Создать" />
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
    name: 'ClassCreate',
    data() {
        return {
            profile: JSON.parse(localStorage.getItem('profile')),
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
            classroom: ''
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
            await axios.get(this.$url + '/subjects/', { headers })
                .then(response => this.subjects = response.data);
        }

        await axios.get(this.$url + 'platoons/', { headers })
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
                'Authorization': 'Token ' + localStorage.token,
            };

            await axios.post(this.$url + 'classes/', data, { headers })
                .then(response => this.$router.push('/classes'));
        }
    },
}
</script>

<style>
</style>