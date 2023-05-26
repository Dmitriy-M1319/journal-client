<template>
    <tr>
        <td>{{ index + 1 }}</td>
        <td>{{ student.surname }}
            {{ student.name }}
            {{ student.patronymic }}</td>
        <td>{{ student.military_post }}</td>
        <td>
            <router-link class="mark_edit_btn" :to="'/students/' + student.id">Редактировать</router-link>
            <form @submit.prevent="onStudentDeleteSubmit">
                <button class="delete_btn btn-no-margin" type="submit">
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
tr td {
    border: 1px solid #000;
}

.mark_edit_btn {
    background-color: #26a269;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 120px;
    /* margin: 20px auto; */
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    height: 25px;
    line-height: 20px;
    /* margin-bottom: 10px; */
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

.btn-no-margin {
    margin: 0;
    width: 100%;
}
</style>