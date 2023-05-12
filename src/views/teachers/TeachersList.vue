<template>
<div class="platoon_box">
      <div class="platoon_box_item">
        <h4>Список преподавателей</h4>
      </div>
      <ul>
        <Teacher v-for="t in teachers"  v-bind:teacher="t" />
      </ul>
      <router-link class="add-btn"
      to="/teachers/create">Добавить преподавателя</router-link>
    </div>
</template>


<script>
import Teacher from './Teacher.vue';

const teachers = [
    {
        id: 1,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        military_rank: 'капитан',
        military_post: 'преподаватель',
        cycle: 'цикл 1',
    },
    {
        id: 2,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        military_rank: 'капитан',
        military_post: 'преподаватель',
        cycle: 'цикл 1',
    },
    {
        id: 3,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        military_rank: 'капитан',
        military_post: 'преподаватель',
        cycle: 'цикл 1',
    },
    {
        id: 4,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        military_rank: 'капитан',
        military_post: 'преподаватель',
        cycle: 'цикл 1',
    },
];
export default {
    name: 'TeachersList',
    components: {
        Teacher
    },
    data() {
        return {
            teachers
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

  .add-btn {
    background-color: #26a269;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 200px;
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