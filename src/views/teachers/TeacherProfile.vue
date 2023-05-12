<template>
    <div class="profile">
        <h3>Личная информация:</h3>
        <p>{{ profile.surname }} {{ profile.name }} {{ profile.patronymic }} </p>
        <p>Воинское звание: {{ profile.military_rank }} </p>
        <p>Воинская должность: {{ profile.military_post }}</p>
        <p>Цикл на кафедре: {{ profile.cycle }}</p>
    </div>
</template>

<script>
export default {
    name: 'TeacherProfile',
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