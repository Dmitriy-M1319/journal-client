<template>
    <div>
        <div class="platoon_box">
            <div class="platoon_box_item">
                <h4>Состав {{ $route.params.number }} взвода</h4>
            </div>
            <div class="platoon_box_item">
                <table class="center_div">
                    <tr>
                        <td style="width: 65px;">Номер</td>
                        <td>ФИО</td>
                        <td>Должность</td>
                        <td>Год рождения</td>
                        <td>Приказ о зачислении</td>
                        <td>Приказ об отчислении</td>
                        <td>Семейное положение</td>
                        <td>Адрес, номер телефона</td>
                        <td>Общественная нагрузка</td>
                        <td>Факультет</td>
                        <td>Спортивный разряд</td>
                    </tr>
                    <Student v-for="(student, index) in students" v-bind:student="student" 
                    v-bind:index="index"
                    v-bind:platoon="platoon" />
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Student from './Student.vue';
import axios from 'axios';

var students = {};

export default {
    name: 'Students',
    props: ['token'],
    mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        axios.get(this.$url + 'platoons/' + this.$route.params.number + '/students/', { headers })
            .then(response => this.students = response.data);

        axios.get(this.$url + 'platoons/' + this.$route.params.number + '/', { headers })
            .then(response => this.platoon = response.data);

    },
    components: {
        Student
    },
    data() {
        return {
            students,
            platoon: {}
        }
    }
}
</script>

<style scoped>
.center_div {
    margin: 0 auto;
    /* width: 100%; */
}

.center {
    display: flex;
    justify-content: center;
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

.platoon_box_item table {
    vertical-align: center;
    text-align: center;
    width: 2000px;
    overflow-x: scroll;
    border: 1px solid #000;
    table-layout: fixed;
    margin: 8px;
    border-radius: 5px;
}

.platoon_box_item table tr td {
    border: 1px solid #000;
}
</style>