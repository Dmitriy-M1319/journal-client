<template>
    <li>
        <div class="platoon_box_item">
            <h4>{{ teacher.surname }} {{ teacher.name }} {{ teacher.patronymic }} </h4>
            <p>Воинское звание: {{ teacher.military_rank }} </p>
            <p>Воинская должность: {{ teacher.military_post }} </p>
            <p>Цикл: {{ teacher.cycle }} </p>
            <div style="display: flex">
                <router-link class="exit_btn"
                :to="'/teacher/' + teacher.id + '/subjects'">Предметы</router-link>
                <router-link class="mark_edit_btn" :to="'/teachers/' + teacher.id">Редактировать</router-link>
            </div>
        </div>
    </li>
</template>


<script>
export default {
    name: 'Teacher',
    props: ['teacher']
}
</script>

<style>
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

  .mark_edit_btn {
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
</style>