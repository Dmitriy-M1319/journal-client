<template>
    <div class="platoon_box_item">
        <h4>Изменение списка студентов взвода</h4>
        <table class="center_div">
            <tr>
                <td style="width: 10%">Номер</td>
                <td style="width: 55%">ФИО</td>
                <td style="width: 25%">Должность</td>
                <td style="width: 20%">Действие</td>
            </tr>
            <PlatoonStudentUpdate v-for="(student, index) in students"
            v-bind:index="index"
            v-bind:student="student" />
        </table>
    </div>
</template>

<script>
import PlatoonStudentUpdate from './PlatoonStudentUpdate.vue';
export default {
    name: 'PlatoonStudentsUpdate',
    components: {
        PlatoonStudentUpdate
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

<style>
.center_div {
    margin: 0 auto;
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