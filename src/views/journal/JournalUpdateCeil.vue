<template>
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-header">
                        <h4 class="fw-bold text-center">Редактировать оценку</h4>
                    </div>
                    <div class="card body p-2">
                        <form @submit.prevent="submitForm">
                            <label class="form-label" for="rank">1. Выберите посещаемость: </label>
                            <select class="form-select" v-model="attendance">
                                <option v-for="a in attendances" :value="a.att">
                                    {{ a.value }}
                                </option>
                            </select>
                            <label class="form-label" for="rank">2. Выберите оценку: </label>
                            <select class="form-select" v-model="mark">
                                <option v-for="m in marks" :value="m.value">
                                    {{ m.name }}
                                </option>
                            </select>
                            <div class="row justify-content-center mt-3">
                                <div class="col-3">
                                    <button class="btn btn-success" type="submit">Редактировать</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'JournalUpdateCeil',
    props: ['edited_mark'],
    data() {
        return {
            edited_mark: {},
            attendances: [
                { att: 'п', value: 'присутствовал' },
                { att: 'у', value: 'уважительная причина' },
                { att: 'н', value: 'неуважительная причина' },
                { att: '', value: 'нет посещаемости' }
            ],
            marks: [
                { value: 5, name: 'отлично (5)' },
                { value: 4, name: 'хорошо (4)' },
                { value: 3, name: 'удовлетворительно (3)' },
                { value: 2, name: 'неудовлетворительно (2)' },
                { value: 0, name: 'не оценено' },
            ],
            attendance: '',
            mark: 0
        }
    },
    mounted() {
        this.mark = this.edited_mark.mark;
        this.attendance = this.edited_mark.attendance;
    },
    methods: {
        async submitForm() {
            console.log(this.edited_mark);
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            console.log(this.$parent.$parent);

            const data = {
                student: this.edited_mark.student,
                subject_class: this.edited_mark.subject_class,
                attendance: this.attendance,
                mark: this.mark
            };
            await axios.put(this.$url + 'ceils/' + this.edited_mark.id + '/', data, { headers })
                .then(response => this.$emit('on-ceil-update', response.data));
            this.$emit('close');
        }
    },
}
</script>

<style>
</style>