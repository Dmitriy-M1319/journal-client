<template>
    <div>
        <div class="platoon_box">
            <div class="platoon_box_item">
                <h4>Состав {{ $route.params.number }} взвода</h4>
            </div>
            <div class="platoon_box_item">
                <table class="center_div">
                    <tr>
                        <td>Номер</td>
                        <td>ФИО</td>
                        <td>Должность</td>
                    </tr>
                    <Student v-for="(student, index) in students"
                    v-bind:student="student"
                    v-bind:index="index"/>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Student from './Student.vue';
export default {
    name: 'Students',
    components: {
        Student
    },
    data() {
        return {
            students: [
                {
                    surname: 'Сазонова',
                    name: 'Иванна',
                    patronymic: 'Сергеевна',
                    military_post: 'студент'
                },
                {
                    surname: 'Сазонова',
                    name: 'Иванна',
                    patronymic: 'Сергеевна',
                    military_post: 'студент'
                },
                {
                    surname: 'Сазонова',
                    name: 'Иванна',
                    patronymic: 'Сергеевна',
                    military_post: 'студент'
                },
                {
                    surname: 'Сазонова',
                    name: 'Иванна',
                    patronymic: 'Сергеевна',
                    military_post: 'студент'
                }
            ]
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
  border: 1px solid #000;
  table-layout: fixed;
  margin: 8px;
  border-radius: 5px;
}
.platoon_box_item table tr td {
  border: 1px solid #000;
}
</style>