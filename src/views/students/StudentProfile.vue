<template>
    <div class="profile">
        <h3>Личная информация:</h3>
        <p>{{ profile.surname }} {{ profile.name }} {{ profile.patronymic }} </p>
        <p>Номер взвода: {{ profile.platoon }} </p>
        <p>Воинская должность: {{ profile.military_post }}</p>
    </div>
</template>

<script>
export default {
    name: 'StudentProfile',
    props: ['profile']
}
</script>

<style>
.profile {
    background-color: #4d8bc3;
    color: aliceblue;
    border-radius: 5px;
    padding: 10px;
    min-width: 70%;
    float: left;
    margin-right: 5px;
}
</style>