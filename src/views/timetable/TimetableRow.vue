<template>
    <tr>
        <td>{{ getTime(timetable_class.class_date) }}</td>
        <td>
            <p> {{ subject.name }} </p>
            <p>{{ teacher.military_rank }} {{ teacher.surname }}
                {{ teacher.name.substring(0, 1) }}.
                {{ teacher.patronymic.substring(0, 1) }}.
            </p>
        </td>
        <td> Тема №{{ timetable_class.theme_number }}</td>
        <td>Занятие №{{ timetable_class.class_number }}</td>
        <td>{{ timetable_class.class_type }}</td>
    </tr>
</template>


<script>
import axios from 'axios';

export default {
    name: 'TimetableRow',
    props: ['timetable_class', 'token'],
    data() {
        return {
            subject: {},
            teacher: {}
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        await axios.get('http://127.0.0.1:8000/api/v1/subjects/' + this.timetable_class.subject + '/', { headers })
            .then(response => this.subject = response.data);

        await axios.get('http://127.0.0.1:8000/api/v1/teachers/' + this.subject.teacher + '/', { headers })
            .then(response => this.teacher = response.data);
    },
    methods: {
        getTime(time) {
            let date_and_time = time.split('T');
            return date_and_time[1].substring(0, 5);
        }
    }
}
</script>

<style></style>