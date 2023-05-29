<template>
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ student.surname }}
            {{ student.name }}
            {{ student.patronymic }}</td>
        <td>{{ student.military_post }}</td>
        <td>
            <router-link class="btn btn-primary pr-1" :to="'/students/' + student.id">Редактировать</router-link>
            <form @submit.prevent="onStudentDeleteSubmit">
                <button class="btn btn-danger p-2 mt-1 mb-0" type="submit">
                    Удалить запись
                </button>
            </form>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PlatoonStudentUpdate',
    props: ['student', 'index'],
    methods: {
        async onStudentDeleteSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            this.index = this.student.platoon;

            await axios.delete(this.$url + 'students/' + this.student.id + '/', { headers })
                .then(response => this.$router.push('/platoon/' + this.index + '/'));
        }
    }
}
</script>

<style scoped>
</style>